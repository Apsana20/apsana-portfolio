import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="left">

        <p className="hello">HELLO, I'M</p>

        <h1>APSANA S A</h1>

        <h2>Aspiring Software Engineer</h2>

        <p className="description">
          Aspiring Software Engineer passionate about building real-world
          applications. Currently enhancing my skills in Full Stack Development,
          Python, Artificial Intelligence, and Machine Learning through academic
          projects and continuous learning.
        </p>

        
        <div className="buttons">
  <a
    href="/apsana s a resume.pdf"
    download
    className="resume-btn"
  >
    Download Resume
  </a>
          <button className="outline-btn">
            View Projects
          </button>
        </div>

      </div>

      <div className="right">

        <div className="profile-circle">
          <img src={profile} alt="APSANA S A" className="profile"/>
        </div>

      </div>

    </section>
  );
}

export default Hero;