
namespace Portfolio.API.Models
{
    public class ChatConversation
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation Property
        public ICollection<ChatMessage> Messages { get; set; }
            = new List<ChatMessage>();
    }
}
