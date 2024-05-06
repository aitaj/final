using Logo.Application.Models.DataContext;
using Logo.Application.Models.Entity;
using Logo.Application.Models.Entity.Membership;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        readonly SignInManager<LogoUser> signInManager;
        readonly UserManager<LogoUser> userManager;
        readonly LogoDbContext db;
        readonly IConfiguration config;
        public AccountsController(SignInManager<LogoUser> signInManager,
            UserManager<LogoUser> userManager,
            LogoDbContext db, IConfiguration config)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.db = db;
            this.config = config;
        }


        [HttpPost("/api/login")]
        [AllowAnonymous]
        public async Task<IActionResult> Signin(SignInModel user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var foundUser = await userManager.FindByEmailAsync(user.UserName);

            if (foundUser == null)
            {
                ModelState.AddModelError("UserName", "İstifadəçi adı və ya şifrəniz səhvdir");

                goto finish;
            }

            var checkResult = await signInManager.CheckPasswordSignInAsync(foundUser, user.Password, false);
            if (!checkResult.Succeeded)
            {
                ModelState.AddModelError("UserName", "İstifadəçi adı və ya şifrəniz səhvdir");

                goto finish;
            }

            if (foundUser.EmailConfirmed == false)
            {
                ModelState.AddModelError("UserName", "E-poçt adresinizə göndərilmiş linklə hesabınızı təsdiq edin!");

                goto finish;
            }

            var signinResult = await signInManager.PasswordSignInAsync(foundUser, user.Password, true, true);

            if (!signinResult.Succeeded)
            {
                ModelState.AddModelError("UserName", "İstifadəçi adı və ya şifrəniz səhvdir");

                goto finish;
            }

           
        finish:
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            string secret = config["JWT:secret"];
            string issuer = config["JWT:Issuer"];
            string audience = config["JWT:Audience"];
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret));
            var credentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer,
                audience,
                claims: null,
                expires: DateTime.UtcNow.AddMinutes(60),
                signingCredentials: credentials);
            string tokenStr = new JwtSecurityTokenHandler().WriteToken(token);
            
            return Ok(new
            {
                error = false,
                token = tokenStr
            });
        }

        //public async Task<IActionResult> Signout()
        //{
        //    await signInManager.SignOutAsync();
        //    return RedirectToAction(nameof(Signin));
        //}

        //public IActionResult AccessDenied()
        //{
        //    return Ok();
        //}

    }
}
