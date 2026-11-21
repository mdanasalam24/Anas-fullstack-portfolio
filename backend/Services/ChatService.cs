
using System.Text.Json;
using Portfolio.API.DTOs;
using Portfolio.API.Services.Interfaces;

namespace Portfolio.API.Services
{
    public class ChatService : IChatService
    {
        private readonly IWebHostEnvironment _environment;
        private readonly List<KnowledgeItem> _knowledge;

        public ChatService(IWebHostEnvironment environment)
        {
            _environment = environment;
            _knowledge = LoadKnowledge();
        }

        public Task<ChatResponseDto> SendMessageAsync(
            Guid conversationId,
            string message)
        {
            if (string.IsNullOrWhiteSpace(message))
            {
                throw new ArgumentException(
                    "Message cannot be empty."
                );
            }

            if (message.Length > 4000)
            {
                throw new ArgumentException(
                    "Message cannot exceed 4000 characters."
                );
            }

            string normalizedMessage = Normalize(message);

            var bestMatch = _knowledge
                .Select(item => new
                {
                    Item = item,
                    Score = CalculateScore(
                        normalizedMessage,
                        item.Keywords
                    )
                })
                .Where(x => x.Score > 0)
                .OrderByDescending(x => x.Score)
                .FirstOrDefault();

            string response;

            if (bestMatch == null)
            {
                response = GetFallbackResponse(message);
            }
            else
            {
                response = DetectLanguage(message) == "hi"
                    ? bestMatch.Item.ResponseHi
                    : bestMatch.Item.ResponseEn;
            }

            return Task.FromResult(new ChatResponseDto
            {
                // Preserved for existing frontend compatibility.
                // No conversation is saved in the database.
                ConversationId = conversationId,
                Response = response
            });
        }

        private List<KnowledgeItem> LoadKnowledge()
        {
            string filePath = Path.Combine(
                _environment.ContentRootPath,
                "Knowledge",
                "portfolio-knowledge.json"
            );

            if (!File.Exists(filePath))
            {
                throw new FileNotFoundException(
                    "Portfolio knowledge file was not found.",
                    filePath
                );
            }

            string json = File.ReadAllText(filePath);

            return JsonSerializer.Deserialize<List<KnowledgeItem>>(
                json,
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                }
            ) ?? new List<KnowledgeItem>();
        }

        private static int CalculateScore(
            string message,
            List<string> keywords)
        {
            int score = 0;

            foreach (string keyword in keywords)
            {
                string normalizedKeyword = Normalize(keyword);

                if (string.IsNullOrWhiteSpace(normalizedKeyword))
                    continue;

                if (message == normalizedKeyword)
                {
                    score += 10;
                }
                else if (message.Contains(normalizedKeyword))
                {
                    score += normalizedKeyword.Contains(' ')
                        ? 5
                        : 2;
                }
            }

            return score;
        }

        private static string Normalize(string value)
        {
            var characters = value
                .ToLowerInvariant()
                .Select(c => char.IsLetterOrDigit(c) || char.IsWhiteSpace(c)
                    ? c
                    : ' ')
                .ToArray();

            return string.Join(
                " ",
                new string(characters)
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
            );
        }

        private static string DetectLanguage(string message)
        {
            // Devanagari characters indicate Hindi.
            if (message.Any(c => c >= '\u0900' && c <= '\u097F'))
            {
                return "hi";
            }

            string normalized = Normalize(message);

            string[] hindiWords =
            {
                "kya", "kaise", "batao", "btao", "hai",
                "mera", "meri", "ke", "ka", "ki",
                "bata", "karo", "krta", "krti", "hoon",
                "hain", "kahan", "kitna"
            };

            return hindiWords.Any(word =>
                normalized.Split(' ').Contains(word))
                ? "hi"
                : "en";
        }

        private static string GetFallbackResponse(string message)
        {
            return DetectLanguage(message) == "hi"
                ? "Maaf kijiye, mere paas is question ki specific information available nahi hai. Aap Anas ke skills, projects, experience ya education ke baare mein pooch sakte hain."
                : "Sorry, I don't have specific information about that question. You can ask me about Anas's skills, projects, experience or education.";
        }

        private class KnowledgeItem
        {
            public string Intent { get; set; } = string.Empty;

            public List<string> Keywords { get; set; } = new();

            public string ResponseEn { get; set; } = string.Empty;

            public string ResponseHi { get; set; } = string.Empty;
        }
    }
}
