
using System.ComponentModel.DataAnnotations;

namespace Portfolio.API.DTOs
{
    public class UpdateContactStatusDto
    {
        [Required]
        [MaxLength(20)]
        public string Status { get; set; } = string.Empty;
    }
}
