using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        public async Task<ActionResult<IEnumerable<Staff>>> GetStaff()
        {
            var staffList = await _staffContext.Staff.ToListAsync();
            if (staffList == null || staffList.Count == 0)
            {
                return NotFound("No staff members found.");
            }
            return Ok(staffList);
        }

        [HttpGet("{StaffID}")]
        public async Task<ActionResult<Staff>> GetStaffByID(int StaffID)
        {
            var staff = await _staffContext.Staff.FindAsync(StaffID);
            if (staff == null)
            {
                return NotFound("Staff member not found.");
            }
            return Ok(staff);
        }

        [HttpPost]
        public async Task<ActionResult<Staff>> PostStaff(Staff staff)
        {
            _staffContext.Staff.Add(staff);
            await _staffContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStaffByID), new { StaffID = staff.StaffID }, staff);
        }

        [HttpPut("{StaffID}")]
        public async Task<IActionResult> PutStaff(int StaffID, Staff staff)
        {
            if (StaffID != staff.StaffID)
            {
                return BadRequest("Staff ID mismatch.");
            }

            _staffContext.Entry(staff).State = EntityState.Modified;
            try
            {
                await _staffContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating staff.");
            }

            return NoContent();
        }

        [HttpDelete("{StaffID}")]
        public async Task<IActionResult> DeleteStaff(int StaffID)
        {
            var staff = await _staffContext.Staff.FindAsync(StaffID);
            if (staff == null)
            {
                return NotFound("Staff member not found.");
            }

            _staffContext.Staff.Remove(staff);
            await _staffContext.SaveChangesAsync();

            return Ok("Staff member deleted successfully.");
        }
    }
}
