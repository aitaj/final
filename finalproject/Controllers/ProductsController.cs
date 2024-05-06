using Logo.Application.Models.DataContext;
using Logo.Application;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace FinalProjectP511.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        readonly LogoDbContext db;
        public ProductsController(LogoDbContext db)
        {
            this.db = db;
        }
      
        [SwaggerOperation("Butun mehsullarin siyahisi")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get()
        {

            var data = await db.Products.Where(s => s.DeletedDate == null).ToListAsync();

            foreach (var item in data)
            {

                item.Size = await db.Sizes.FirstOrDefaultAsync(s => s.Id == item.SizeId);
                item.ProductColor = await db.ProductColors.FirstOrDefaultAsync(s => s.Id == item.ProductColorId);
                item.SubCategory = await db.SubCategories.FirstOrDefaultAsync(s => s.Id == item.SubCategoryId);
                item.Material = await db.Materials.FirstOrDefaultAsync(s => s.Id == item.MaterialId);
                item.Location = await db.Locations.FirstOrDefaultAsync(s => s.Id == item.LocationId);
                item.Brend = await db.Brends.FirstOrDefaultAsync(s => s.Id == item.BrendId);
                item.ProductImages = await db.ProductImages.Where(i => i.ProductId == item.Id).ToListAsync();
            }
            return Ok(data);
        }
        [HttpGet("{id:int:min(1)}")]
        [SwaggerOperation("Id-ye gore bir service")]
        [AllowAnonymous]
        public async Task<IActionResult> Get(int id)
        {
            var data = await db.Products.FirstOrDefaultAsync(s => s.Id == id && s.DeletedDate == null);

            data.Size = await db.Sizes.FirstOrDefaultAsync(s => s.Id == data.SizeId);
            data.ProductColor = await db.ProductColors.FirstOrDefaultAsync(s => s.Id == data.ProductColorId);
            data.SubCategory = await db.SubCategories.FirstOrDefaultAsync(s => s.Id == data.SubCategoryId);
            data.Material = await db.Materials.FirstOrDefaultAsync(s => s.Id == data.MaterialId);
            data.Location = await db.Locations.FirstOrDefaultAsync(s => s.Id == data.LocationId);
            data.Brend = await db.Brends.FirstOrDefaultAsync(s => s.Id == data.BrendId);
            data.ProductImages=await db.ProductImages.Where(i=>i.ProductId==data.Id).ToListAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Add(Product model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            model.Size = await db.Sizes.FirstOrDefaultAsync(s => s.Id == model.SizeId);
            model.ProductColor= await db.ProductColors.FirstOrDefaultAsync(s => s.Id == model.ProductColorId);
            model.SubCategory= await db.SubCategories.FirstOrDefaultAsync(s => s.Id == model.SubCategoryId);
            model.Material = await db.Materials.FirstOrDefaultAsync(s => s.Id == model.MaterialId);
            model.Location = await db.Locations.FirstOrDefaultAsync(s => s.Id == model.LocationId);
            model.Brend = await db.Brends.FirstOrDefaultAsync(s => s.Id == model.BrendId);
            model.ProductImages = await db.ProductImages.Where(i => i.ProductId == model.Id).ToListAsync();
            model.CreatedByUserId = 1;
            var product=await  db.Products.AddAsync(model);
            db.SaveChanges();
            return Ok(product);
        }

        [HttpPut("{id:int:min(1)}")]
        public async Task<IActionResult> Edit(int id, Product model)
        {
            if (id != model.Id)
            {
                ModelState.AddModelError("Id", "Entity Key is not same!");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entity = await db.Products.FirstOrDefaultAsync(s => s.Id == id && s.DeletedDate == null);

            if (entity == null)
                return NotFound();

            model.Size = await db.Sizes.FirstOrDefaultAsync(s => s.Id == model.SizeId);
            model.ProductColor = await db.ProductColors.FirstOrDefaultAsync(s => s.Id == model.ProductColorId);
            model.SubCategory = await db.SubCategories.FirstOrDefaultAsync(s => s.Id == model.SubCategoryId);
            model.Material = await db.Materials.FirstOrDefaultAsync(s => s.Id == model.MaterialId);
            model.Location = await db.Locations.FirstOrDefaultAsync(s => s.Id == model.LocationId);
            model.Brend = await db.Brends.FirstOrDefaultAsync(s => s.Id == model.BrendId);
            entity.Name = model.Name;
            entity.SerialNumber = model.SerialNumber;
            entity.Price = model.Price;
            entity.IsFavourite = model.IsFavourite;
            entity.Material = model.Material;
            entity.Size = model.Size;
            entity.SubCategory = model.SubCategory;
            entity.Description = model.Description;
            entity.ProductColor= model.ProductColor;
            entity.Location = model.Location;
            entity.Brend = model.Brend;
            entity.Discount = model.Discount;
            entity.StartDiscount = model.StartDiscount;
            entity.EndDiscount = model.EndDiscount;
            await db.SaveChangesAsync();

            return Ok(entity);
        }

        [HttpDelete("{id:int:min(1)}")]
        public async Task<IActionResult> Remove(int id)
        {

            var entity = await db.Products.FirstOrDefaultAsync(s => s.Id == id && s.DeletedDate == null);

            if (entity == null)
                return NotFound();

            entity.DeletedByUserId = 1;
            entity.DeletedDate = DateTime.Now;

            await db.SaveChangesAsync();

            return Ok(entity);
        }
    }
}
