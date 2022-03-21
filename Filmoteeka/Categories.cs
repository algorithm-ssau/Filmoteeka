using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Filmoteeka
{
    public class Categories
    {
        private int id;
        private string name;
        public Categories(int id,string name)
        {
            this.id = id;
            this.name = name;
        }
        public void setId(int id)
        {
            this.id = id;
        }
        public int getId()
        {
            return this.id;
        }
        public void setName(string name)
        {
            this.name = name;
        }
        public string getName()
        {
            return this.name;
        }
    }
}
