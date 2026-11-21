
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Portfolio.API.Data;
using Portfolio.API.DTOs;
using Portfolio.API.Models;
using Portfolio.API.Services.Interfaces;
using Portfolio.API.Settings;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;

namespace Portfolio.API.Services
{
    public class AdminAuthService : IAdminAuthService
    {
        private readonly PortfolioDbContext _context;
        private readonly JwtSettings _jwtSettings;

        public AdminAuthService(
            PortfolioDbContext context,
            IOptions<JwtSettings> jwtOptions)
        {
            _context = context;
            _jwtSettings = jwtOptions.Value;
        }

        public async Task<AdminLoginResponse?> LoginAsync(
            AdminLoginRequest request)
        {
            Admin? admin = await _context.Admins
                .FirstOrDefaultAsync(a =>
                    a.Email == request.Email);

            if (admin == null || !admin.IsActive)
                return null;

            bool isPasswordValid =
                BCrypt.Net.BCrypt.Verify(
                    request.Password,
                    admin.PasswordHash
                );

            if (!isPasswordValid)
                return null;

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,
                    admin.Id.ToString()),

                new Claim(ClaimTypes.Email, admin.Email),

                new Claim(ClaimTypes.Role, "Admin")
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_jwtSettings.SecretKey)
            );

            var credentials = new SigningCredentials(
                key,
                SecurityAlgorithms.HmacSha256
            );

            var expiresAt = DateTime.UtcNow.AddMinutes(
                _jwtSettings.ExpiryInMinutes
            );

            var token = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Audience,
                claims: claims,
                expires: expiresAt,
                signingCredentials: credentials
            );

            return new AdminLoginResponse
            {
                Token = new JwtSecurityTokenHandler()
                    .WriteToken(token),

                Email = admin.Email,
                ExpiresAt = expiresAt
            };
        }
    }
}
