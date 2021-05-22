using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class OrdersController : Controller
    {
        private RepositoryContext db;
        public OrdersController(RepositoryContext context)
        {
            db = context;
        }
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return db.Orders;
        }

        [HttpPost]
        public IActionResult Post(Order order)
        {
            order.Id = Guid.NewGuid();
            db.Orders.Add(order);
            db.SaveChanges();
            return Ok(order);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var order = db.Orders.FirstOrDefault(x => x.Id == id);
            if (order == null)
            {
                return NotFound();
            }
            db.Orders.Remove(order);
            db.SaveChanges();
            return RedirectToAction("Get");
        }
    }
}
