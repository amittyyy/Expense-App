using ExpenseAPI.Data;
using ExpenseAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ExpenseAPI.Controllers
{
    [EnableCors("http://localhost:4200", "*", "*")]
    public class EntriesController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetEntry(int Id)
        {
            try
            {
                using (var context = new AppDbConext())
                {
                    var entry = context.entries.FirstOrDefault( e => e.Id == Id);
                    if (entry == null) return NotFound();
                    return Ok(entry);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                //throw;
            }

        }

        [HttpGet]
        public IHttpActionResult GetEntries()
        {
            try
            {
                using (var context = new AppDbConext())
                {
                    var entries = context.entries.ToList();
                    return Ok(entries);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                //throw;
            }
            
        }
        
        [HttpPost]
        public IHttpActionResult PostEntry([FromBody]Entry entry)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {
                using (var context = new AppDbConext())
                {
                    context.entries.Add(entry);
                    context.SaveChanges();
                    return Ok("Entry Was Created");
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IHttpActionResult UpdateEntry(int id, [FromBody]Entry entry)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (id != entry.Id)
                return BadRequest();

            try
            {
                using (var context = new AppDbConext())
                {
                    var oldEntry = context.entries.FirstOrDefault(n => n.Id == id);
                    if (oldEntry == null) return NotFound();

                    oldEntry.Description = entry.Description;
                    oldEntry.IsExpense = entry.IsExpense;
                    oldEntry.Value = entry.Value;

                    context.SaveChanges();
                    return Ok("Entry Updated Successfully");
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public IHttpActionResult DeleteEntry(int id)
        {
            try
            {
                using (var context = new AppDbConext())
                {
                    var entry = context.entries.First(n => n.Id == id);
                    if (entry == null)
                    {
                        return NotFound();
                    }
                    else
                    {
                        context.entries.Remove(entry);
                    }
                    context.SaveChanges();
                    return Ok("Entry Deleted");
                }  
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
