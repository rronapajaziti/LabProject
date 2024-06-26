using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WebApplication1.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<StaffContext>(options =>

options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS")));

builder.Services.AddDbContext<BooksContext>(options =>

options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS")));


builder.Services.AddDbContext<CategoriesContext>(options =>

options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS")));


builder.Services.AddDbContext<AccessoriesContext>(options =>

options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDS")));



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
