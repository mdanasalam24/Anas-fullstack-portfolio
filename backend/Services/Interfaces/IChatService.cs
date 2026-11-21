
using Portfolio.API.DTOs;

namespace Portfolio.API.Services.Interfaces
{
    public interface IChatService
    {
        Task<ChatResponseDto> SendMessageAsync(
            Guid conversationId,
            string message
        );
    }
}
