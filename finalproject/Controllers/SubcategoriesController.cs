using Logo.Application.Models.DataContext;
using Logo.Application.Models.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Logo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Subcategories : ControllerBase
    {
        readonly LogoDbContext db;
        public Subcategories(LogoDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [SwaggerOperation("Butun alt kategoriyalarin siyahisi")]
        [AllowAnonymous]
        public async Task<IActionResult> Get()
        {
            var data = await db.SubCategories
                .Where(s => s.DeletedDate == null)
                .ToListAsync();
            foreach (var item in data)
            {

                item.Category = await db.Categories.FirstOrDefaultAsync(c => c.Id == item.CategoryId);
            }
            return Ok(data);
        }

        [HttpGet("{id:int:min(1)}")]
        [SwaggerOperation("Id-ye gore bir alt  kategoriya")]
        public async Task<IActionResult> Get(int id)
        {
            var data = await db.SubCategories
                .FirstOrDefaultAsync(s => s.Id == id && s.DeletedDate == null);
            data.Category = await db.Categories.FirstOrDefaultAsync(c => c.Id == data.CategoryId);
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Add( SubCategory model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            model.Category = await db.Categories.FirstOrDefaultAsync(c => c.Id == model.CategoryId);
            await db.SubCategories.AddAsync(model);


            db.SaveChanges();
            return CreatedAtAction(nameof(Get), new
            {
                id = model.Id

            }, model);
        }

        [HttpPut("{id:int:min(1)}")]
        public async Task<IActionResult> Edit(int id, SubCategory model)
        {
            if (id != model.Id)
            {
                ModelState.AddModelError("Id", "Entity Key is not same!");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entity = await db.SubCategories
                .FirstOrDefaultAsync(s => s.Id == id && s.DeletedDate == null);

            if (entity == null)
                return NotFound();

            model.Category = await db.Categories.FirstOrDefaultAsync(c => c.Id == model.CategoryId);
            entity.Name = model.Name;//
            entity.Category = model.Category;
            entity.CreatedByUserId = model.CreatedByUserId;
            entity.CreatedDate = model.CreatedDate;
            entity.DeletedDate = model.DeletedDate;
            entity.DeletedByUserId = model.DeletedByUserId;

            await db.SaveChangesAsync();

            return Ok(entity);
        }

        [HttpDelete("{id:int:min(1)}")]
        public async Task<IActionResult> Remove(int id)
        {

            var entity = await db.SubCategories
                .FirstOrDefaultAsync(s => s.Id == id && s.DeletedDate == null);

            if (entity == null)
                return NotFound();

            entity.DeletedByUserId = 1;
            entity.DeletedDate = DateTime.Now;

            await db.SaveChangesAsync();

            return Ok(entity);
        }
    }

}
