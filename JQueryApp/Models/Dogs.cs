using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JQueryApp.Models
{
    public class Dog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Type { get; set; }

    }
    public class Dogs
    {
        public static List<Dog> list = new List<Dog>();

     
    }
}