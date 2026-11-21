
namespace Portfolio.API.DTOs
{
    public class AdminLoginResponse
    {
        public string Token { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public DateTime ExpiresAt { get; set; }
    }
}
