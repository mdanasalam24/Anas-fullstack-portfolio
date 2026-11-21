
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Portfolio.API.Data;
using Portfolio.API.DTOs;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly PortfolioDbContext _context;

        public ContactController(PortfolioDbContext context)
        {
            _context = context;
        }

        // PUBLIC: Create Contact Message
        [HttpPost]
        public async Task<IActionResult> CreateContact(
            [FromBody] ContactRequestDto request)
        {
            var contact = new ContactMessage
            {
                Name = request.Name,
                Email = request.Email,
                Subject = request.Subject,
                Message = request.Message,
                CreatedAt = DateTime.UtcNow,
                Status = "New"
            };

            _context.ContactMessages.Add(contact);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                success = true,
                message = "Contact message saved successfully!",
                id = contact.Id
            });
        }

        // ADMIN: Get All Contact Messages
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<IActionResult> GetAllMessages()
        {
            var messages = await _context.ContactMessages
                .AsNoTracking()
                .OrderByDescending(m => m.CreatedAt)
                .ToListAsync();

            return Ok(new
            {
                success = true,
                data = messages
            });
        }

        // ADMIN: Get Single Contact Message
        [Authorize(Roles = "Admin")]
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetMessage(int id)
        {
            var message = await _context.ContactMessages
                .AsNoTracking()
                .FirstOrDefaultAsync(m => m.Id == id);

            if (message == null)
            {
                return NotFound(new
                {
                    success = false,
                    message = "Contact message not found."
                });
            }

            return Ok(new
            {
                success = true,
                data = message
            });
        }

        // ADMIN: Update Message Status
        [Authorize(Roles = "Admin")]
        [HttpPut("{id:int}/status")]
        public async Task<IActionResult> UpdateMessageStatus(
            int id,
            [FromBody] UpdateContactStatusDto request)
        {
            var allowedStatuses = new[]
            {
                "New", "Read", "Replied", "Archived"
            };

            var status = allowedStatuses.FirstOrDefault(
                s => s.Equals(
                    request.Status.Trim(),
                    StringComparison.OrdinalIgnoreCase
                )
            );

            if (status == null)
            {
                return BadRequest(new
                {
                    success = false,
                    message = "Invalid message status."
                });
            }

            var message = await _context.ContactMessages
                .FirstOrDefaultAsync(m => m.Id == id);

            if (message == null)
            {
                return NotFound(new
                {
                    success = false,
                    message = "Contact message not found."
                });
            }

            message.Status = status;

            if (status == "Replied")
            {
                message.RepliedAt = DateTime.UtcNow;
            }
            else
            {
                message.RepliedAt = null;
            }

            await _context.SaveChangesAsync();

            return Ok(new
            {
                success = true,
                message = "Contact message status updated successfully.",
                data = message
            });
        }

        // ADMIN: Delete Contact Message
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteMessage(int id)
        {
            var message = await _context.ContactMessages
                .FirstOrDefaultAsync(m => m.Id == id);

            if (message == null)
            {
                return NotFound(new
                {
                    success = false,
                    message = "Contact message not found."
                });
            }

            _context.ContactMessages.Remove(message);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                success = true,
                message = "Contact message deleted successfully."
            });
        }
    }
}
