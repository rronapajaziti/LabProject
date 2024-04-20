namespace WebApplication1.Models
{
    public class Staff {
        public int StaffID { get; set; }     
        public String Name { get; set; }     
        public String Surname { get; set; }     
        public DateTime Birthdate { get; set; }
        public String ContactNumber {get; set; }
        public String Position {get; set; }
        public String EmploymentStatus {get; set; }
        public DateTime JoiningDate {get; set; }
        public Double Salary {get; set; }
        public String PerformanceRating {get; set; }

    }
}