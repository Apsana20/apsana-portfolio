function Projects() {
  const projects = [
    {
      title: "🌾 AgriAssist AI",
      description:
        "AI-powered smart agriculture platform with Crop Recommendation, Disease Detection, Fertilizer Recommendation and Yield Prediction.",
      tech: "Python • Django • Machine Learning • SQLite",
      github: "https://github.com/Apsana20",
      demo: "#"
    },
    {
      title: "📄 AI Resume Analyzer",
      description:
        "Resume analyzer that extracts skills, compares resumes with job descriptions and provides smart recommendations.",
      tech: "Python • Flask • SQLite • NLP",
      github: "https://github.com/Apsana20",
      demo: "#"
    },
    {
      title: "💰 Expense Tracker",
      description:
        "Personal finance application to manage income, expenses and visualize spending with interactive dashboards.",
      tech: "React • JavaScript • Node.js",
      github: "https://github.com/Apsana20",
      demo: "#"
    }
  ];

  return (
    <section className="section" id="projects">

      <h2>Projects</h2>

      <div className="project-grid">

        {projects.map((project,index)=>(
          <div className="project-card" key={index}>
            {project.image && (
  <img
    src={project.image}
    alt={project.title}
    className="project-image"
  />
)}


            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech">
              {project.tech}
            </span>

            <div className="project-buttons">

              <a href={project.github} target="_blank">
                GitHub
              </a>

              <a href={project.demo}>
                Live Demo
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;