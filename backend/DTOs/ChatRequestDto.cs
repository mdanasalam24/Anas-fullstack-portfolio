
using System.ComponentModel.DataAnnotations;

namespace Portfolio.API.DTOs
{
    public class ChatRequestDto
    {
        public Guid? ConversationId { get; set; }

        [Required]
        [StringLength(4000, MinimumLength = 1)]
        public string Message { get; set; } = string.Empty;
    }
}
