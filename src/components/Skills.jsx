import {
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";
function Skills() {
  const skills = [
    {
      title: "Frontend",
      skills: "HTML5 • CSS3 • JavaScript (ES6+) • React.js • Tailwind CSS (Learning)",
     icon:<FaReact/>
    },
    {
      title: "Backend",
      skills: "Python • Java (Fundamentals) • Node.js (Learning)",
      icon:<FaServer/>
    },
    {
      title: "Database",
      skills: "MySQL • SQLite • MongoDB (Learning)",
     icon:<FaDatabase/>
    },
    {
      title: "Core Computer Science",
      skills: "DSA(C) • DBMS • Operating Systems • Computer Networks",
      icon:<FaLaptopCode/>
    },
    {
      title: "Tools & Technologies",
      skills: "Git • GitHub • VS Code • REST APIs • Deployment",
     icon:<FaTools/>
    },
    {
      title: "AI & Machine Learning",
      skills: "Currently learning AI & ML using Python.",
      icon:<FaBrain/>
    }
  ];

  return (
    <section className="section" id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-grid">

        {skills.map((item,index)=>(
          <div className="skill-card" key={index}>

            <div className="icon-circle">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.skills}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;