
using Portfolio.API.DTOs;

namespace Portfolio.API.Services.Interfaces
{
    public interface IAdminAuthService
    {
        Task<AdminLoginResponse?> LoginAsync(
            AdminLoginRequest request
        );
    }
}
