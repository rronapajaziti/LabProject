using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class AccessoriesContext : DbContext
    {
        public AccessoriesContext(DbContextOptions<AccessoriesContext> options) : base(options)
        {


        }
        public DbSet<Accessories> Accessories { get; set; }
    }
}
