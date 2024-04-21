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
    public class AccessoryController : ControllerBase
    {
        private readonly AccessoryContext _accessoryContext;

        public AccessoryController(accessoryContext accessoryContext)
        {
            _accessoryContext = accessoryContext;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Accessory>>> getAccessory()
        {
            if (_AccessoryContext.Accessory == null)
            {
                return NotFound();
            }
            return await _AccessoryContext.Accessory.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Accessory>> GetAccessory(int id)
        {
            if (_accessoryContext.Accessory == null)
            {
                return NotFound();
            }
            var accessory = await _accessoryContext.Accessory.FindAsync(id);
            if (accessory == null)
            {
                return NotFound();
            }
            else
            {
                return accessory;
            }
        }
        [HttpPost]
        public async Task<ActionResult<Accessory>> PostAccessory(Accessory accessory)
        {
            _accessoryContext.Accessory.Add(accessory);
            await _accessoryContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAccessory), new { id = accessory.ID }, accessory);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> PutAccessory(int id, Accessory accessory)
        {
            if (id != accessory.ID)
            {
                return BadRequest();
            }
            _accessoryContext.Entry(accessory).State = EntityState.Modified;
            try
            {
                await _accessoryContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteAccessory(int id)
        {
            if (_accessoryContext.Accessory == null)
            {
                return NotFound();
            }
            var accessory = await _accessoryContext.Accessory.FindAsync(id);
            if (accessory == null)
            {
                return NotFound();
            }
            _accessoryContext.Accessory.Remove(accessory);
            await _accessoryContext.SaveChangesAsync();
            return Ok();
        }
    }
}
