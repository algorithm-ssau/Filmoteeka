using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Filmoteeka
{
    public class Films
    {
        private int id;
        private string name;
        private string author;
        private string description;
        private int averagemark;
        private string poster;
        private string trailer;

        public Films(int id, string name, string author, string description, int averagemark, string poster, string trailer)
        {
            this.author = author;
            this.averagemark = averagemark;
            this.description = description;
            this.id = id;
            this.name = name;
            this.poster = poster;
            this.trailer = trailer;
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
        public void setAuthor(string author)
        {
            this.author = author;
        }
        public string getAuthor()
        {
            return this.author;
        }
        public void setDescription(string description)
        {
            this.description = description;
        }
        public string getDescription()
        {
            return this.description;
        }
        public void setAveragemark(int averagemark)
        {
            this.averagemark = averagemark;
        }
        public int getAveragemark()
        {
            return this.averagemark;
        }
        public void setPoster(string poster)
        {
            this.poster = poster;
        }
        public string getPoster()
        {
            return this.poster;
        }
        public void setTrailer(string trailer)
        {
            this.trailer = trailer;
        }
        public string getTrailer()
        {
            return this.trailer;
        }
    }
}
