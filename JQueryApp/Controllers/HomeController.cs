using JQueryApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JQueryApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
           
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        [HttpPost]
        public ActionResult Add(Dog dog)
        {
            dog.Id = (Dogs.list==null)?0:Dogs.list.Max(x => x.Id) + 1;
            Dogs.list.Add(dog);
            return Json( new {message="ok"}, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Show()
        {
            return Json(Dogs.list, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ShowDetails(int id)
        {
            Dog dog = Dogs.list.Find(x => x.Id == id);
            return Json(dog, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

      
    }
}
