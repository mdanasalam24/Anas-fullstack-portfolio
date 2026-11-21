
namespace Portfolio.API.DTOs
{
    public class ChatResponseDto
    {
        public Guid ConversationId { get; set; }

        public string Response { get; set; } = string.Empty;
    }
}
