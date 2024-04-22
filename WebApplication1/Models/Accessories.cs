using System;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Accessories
    {
        [Key]
        public int AccessoryID { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public string Seller { get; set; }
        public string Description { get; set; }
        public string Dimensions { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
