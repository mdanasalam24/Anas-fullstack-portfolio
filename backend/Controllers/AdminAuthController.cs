
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Portfolio.API.DTOs;
using Portfolio.API.Services.Interfaces;
using System.Security.Claims;

namespace Portfolio.API.Controllers
{
    [Route("api/admin")]
    [ApiController]
    public class AdminAuthController : ControllerBase
    {
        private readonly IAdminAuthService _adminAuthService;

        public AdminAuthController(
            IAdminAuthService adminAuthService)
        {
            _adminAuthService = adminAuthService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(
            [FromBody] AdminLoginRequest request)
        {
            var result = await _adminAuthService.LoginAsync(request);

            if (result == null)
            {
                return Unauthorized(new
                {
                    success = false,
                    message = "Invalid email or password."
                });
            }

            return Ok(new
            {
                success = true,
                message = "Login successful.",
                data = result
            });
        }

        // Verify logged-in admin
        [Authorize]
        [HttpGet("me")]
        public IActionResult GetCurrentAdmin()
        {
            var adminId = User.FindFirst(
                ClaimTypes.NameIdentifier)?.Value;

            var email = User.FindFirst(
                ClaimTypes.Email)?.Value;

            if (string.IsNullOrEmpty(adminId) ||
                string.IsNullOrEmpty(email))
            {
                return Unauthorized(new
                {
                    success = false,
                    message = "Invalid admin token."
                });
            }

            return Ok(new
            {
                success = true,
                data = new
                {
                    Id = adminId,
                    Email = email,
                    Role = "Admin"
                }
            });
        }
    }
}
