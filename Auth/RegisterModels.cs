using System.ComponentModel.DataAnnotations;

namespace Project1.Auth
{
    public class RegisterModels
    {
        [Required(ErrorMessage = "UserName cannot be empty")]
        public string UserName { get; set; }
        public string Password { get; set; }

        [Required(ErrorMessage ="Email Cannot be null")]
        [EmailAddress]
        public string Email { get; set; }
    }
}
