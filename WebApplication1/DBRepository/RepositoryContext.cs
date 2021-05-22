using Microsoft.EntityFrameworkCore;
using Models.Models;
using System.Configuration;

namespace DBRepository
{
    public class RepositoryContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }
        public RepositoryContext(DbContextOptions<RepositoryContext> options)
            : base(options)
        {
            Database.EnsureCreated();   // создаем базу данных при первом обращении
        }
    } 
}
