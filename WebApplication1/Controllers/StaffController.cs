using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly StaffContext _staffContext;
        public StaffController(StaffContext staffContext)
        {
            _staffContext = staffContext;
            
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Staff>>> getStaff()
        {
            if(_staffContext.Staff == null)
            {
                return NotFound();
            }
            return await _staffContext.Staff.ToListAsync();
        }
        [HttpGet("{StaffID}")]
        public async Task<ActionResult<Staff>> GetStaff(int StaffID)
        {
            if (_staffContext.Staff == null)
            {
                return NotFound();
            }
            var staff = await _staffContext.Staff.FindAsync(StaffID);
            if (staff == null)
            {
                return NotFound();
            }
            else
            {
                return staff;
            }
        }
        [HttpPost]
        public async Task<ActionResult<Staff>> PostStaff(Staff staff)
        {
            _staffContext.Staff.Add(staff);
            await _staffContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStaff), new { StaffID = staff.StaffID }, staff);
        }


        [HttpPut("{StaffID}")]
        public async Task<ActionResult> PutStaff(int CategoryID, Staff staff)
        {
            if (StaffID != staff.StaffID)
            {
                return BadRequest();
            }
            _staffContext.Entry(staff).State = EntityState.Modified;
            try
            {
                await _staffContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{StaffID}")]

        public async Task<ActionResult> DeleteStaff(int StafID)
        {
            if (_staffContext.Staff == null)
            {
                return NotFound();
            }
            var staff = await _staffContext.Staff.FindAsync(StaffID);
            if (staff == null)
            {
                return NotFound();
            }
            _staffContext.Staff.Remove((Staff)staff);
            await _staffContext.SaveChangesAsync();
            return Ok();
        }
    }
}
