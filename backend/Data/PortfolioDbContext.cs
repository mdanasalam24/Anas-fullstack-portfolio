
using Microsoft.EntityFrameworkCore;
using Portfolio.API.Models;

namespace Portfolio.API.Data
{
    public class PortfolioDbContext : DbContext
    {
        public PortfolioDbContext(
            DbContextOptions<PortfolioDbContext> options)
            : base(options)
        {
        }

        // Existing Tables
        public DbSet<Admin> Admins { get; set; }

        public DbSet<ContactMessage> ContactMessages { get; set; }

        // Chatbot Tables
        public DbSet<ChatConversation> ChatConversations { get; set; }

        public DbSet<ChatMessage> ChatMessages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Conversation - Messages Relationship
            modelBuilder.Entity<ChatConversation>()
                .HasMany(c => c.Messages)
                .WithOne(m => m.Conversation)
                .HasForeignKey(m => m.ConversationId)
                .OnDelete(DeleteBehavior.Cascade);

            // Conversation Configuration
            modelBuilder.Entity<ChatConversation>()
                .HasKey(c => c.Id);

            // Message Configuration
            modelBuilder.Entity<ChatMessage>()
                .HasKey(m => m.Id);

            modelBuilder.Entity<ChatMessage>()
                .Property(m => m.Role)
                .HasMaxLength(20)
                .IsRequired();

            modelBuilder.Entity<ChatMessage>()
                .Property(m => m.Content)
                .IsRequired();
        }
    }
}
