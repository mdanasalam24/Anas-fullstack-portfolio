
using Microsoft.EntityFrameworkCore;
using Portfolio.API.Models;

namespace Portfolio.API.Data
{
    public static class AdminSeeder
    {
        public static async Task SeedAsync(
            IServiceProvider serviceProvider,
            IConfiguration configuration)
        {
            var email = configuration["AdminSeed:Email"];
            var password = configuration["AdminSeed:Password"];

            // Skip seeding when credentials are not configured.
            if (string.IsNullOrWhiteSpace(email) &&
                string.IsNullOrWhiteSpace(password))
            {
                return;
            }

            if (string.IsNullOrWhiteSpace(email) ||
                string.IsNullOrWhiteSpace(password))
            {
                throw new InvalidOperationException(
                    "Both AdminSeed Email and Password are required.");
            }

            email = email.Trim().ToLowerInvariant();

            if (!System.Net.Mail.MailAddress.TryCreate(email, out var address)
                || address.Address != email)
            {
                throw new InvalidOperationException(
                    "Invalid admin email address.");
            }

            if (password.Length < 12)
            {
                throw new InvalidOperationException(
                    "Admin password must contain at least 12 characters.");
            }

            var context = serviceProvider
                .GetRequiredService<PortfolioDbContext>();

            bool adminExists = await context.Admins
                .AnyAsync(a => a.Email == email);

            if (adminExists)
            {
                return;
            }

            var admin = new Admin
            {
                Email = email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(password),
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            };

            context.Admins.Add(admin);

            await context.SaveChangesAsync();
        }
    }
}
