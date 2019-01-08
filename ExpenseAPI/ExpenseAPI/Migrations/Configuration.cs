namespace ExpenseAPI.Migrations
{
    using ExpenseAPI.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ExpenseAPI.Data.AppDbConext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ExpenseAPI.Data.AppDbConext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.en
            context.entries.Add(new Entry() { Description = "Test", IsExpense = false, Value = 10.12 });
        }
    }
}
