using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccessoriesController : ControllerBase
    {
        private readonly AccessoriesContext _accessoriesContext;

        public AccessoriesController(AccessoriesContext accessoriesContext)
        {
            _accessoriesContext = accessoriesContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Accessories>>> GetAccessories()
        {
            var accessories = await _accessoriesContext.Accessories.ToListAsync();
            if (accessories == null)
            {
                return NotFound();
            }
            return accessories;
        }

        [HttpGet("{ID}")]
        public async Task<ActionResult<Accessories>> GetAccessories(int ID)
        {
            var accessories = await _accessoriesContext.Accessories.FindAsync(ID);
            if (accessories == null)
            {
                return NotFound();
            }
            return accessories;
        }

        [HttpPost]
        public async Task<ActionResult<Accessories>> PostAccessories(Accessories accessories)
        {
            _accessoriesContext.Accessories.Add(accessories);
            await _accessoriesContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAccessories), new { ID = accessories.AccessoryID }, accessories);
        }

        [HttpPut("{ID}")]
        public async Task<IActionResult> PutAccessory(int ID, Accessories accessories)
        {
            if (ID != accessories.AccessoryID)
            {
                return BadRequest();
            }

            _accessoriesContext.Entry(accessories).State = EntityState.Modified;

            try
            {
                await _accessoriesContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccessoriesExists(ID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAccessories(int id)
        {
            var accessories = await _accessoriesContext.Accessories.FindAsync(id);
            if (accessories == null)
            {
                return NotFound();
            }

            _accessoriesContext.Accessories.Remove(accessories);
            await _accessoriesContext.SaveChangesAsync();

            return NoContent();
        }

        private bool AccessoriesExists(int ID)
        {
            return _accessoriesContext.Accessories.Any(e => e.AccessoryID == ID);
        }
    }
}
