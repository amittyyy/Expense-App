using ExpenseAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ExpenseAPI.Data
{
    public class AppDbConext : DbContext
    {
        public AppDbConext() :base("name=ExpensesDb")
        {

        }
        public DbSet<Entry> entries { get; set; }
        public DbSet<User> users { get; set; }
    }
}