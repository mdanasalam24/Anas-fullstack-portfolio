
using System.ComponentModel.DataAnnotations;

namespace Portfolio.API.Models
{
    public class ContactReply
    {
        public int Id { get; set; }

        public int ContactMessageId { get; set; }

        [Required]
        [MaxLength(2000)]
        public string ReplyMessage { get; set; } = string.Empty;

        [Required]
        [MaxLength(150)]
        public string RecipientEmail { get; set; } = string.Empty;

        public DateTime SentAt { get; set; } = DateTime.UtcNow;

        public ContactMessage ContactMessage { get; set; } = null!;
    }
}
