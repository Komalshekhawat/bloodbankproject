using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BloodBankManagementSystem.Entities;


namespace BloodBankManagementSystem.DBContext
{
    public class MainContext : DbContext
    {
        public MainContext(DbContextOptions<MainContext> options) : base(options)
        { 
        }
            public DbSet<BloodDonationCamp> BloodDonationCamps{get;set;}


        
    }
}
