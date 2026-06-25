import cloud from "../assets/certificates/clodthat-certificate.png.jpeg";
import cyber from "../assets/certificates/cyber-certificate.png.jpeg";
import azure from "../assets/certificates/microsoft azure ai-certificate.png.jpeg";
import mlcodechef from "../assets/certificates/mlcodechef-certificate.png.jpeg";
import networking from "../assets/certificates/networking-certificate.png.jpeg";
import research from "../assets/certificates/research paper-certificate.png.jpeg";
import workshop from "../assets/certificates/workshop-certificate.png.jpeg";

import arrays from "../assets/certificates/arrays-certificate.png";
import java from "../assets/certificates/javainfosis-certificate.png";
import machineLearning from "../assets/certificates/machine-learning-certificate.png";
import python from "../assets/certificates/ai-python-certificate.png";
import sql from "../assets/certificates/sql-certificate.png";
import stacks from "../assets/certificates/stacks-queues-certificate.png";

function Certificates() {

  const certificates = [
    {
      title: "Cloud Chat",
      image: cloud,
      file: cloud
    },
    {
      title: "Cyber Security",
      image: cyber,
      file: cyber
    },
    {
      title: "Microsoft Azure AI",
      image: azure,
      file: azure
    },
    {
      title: "Machine Learning CodeChef",
      image: mlcodechef,
      file: mlcodechef
    },
    {
      title: "Networking",
      image: networking,
      file: networking
    },
    {
      title: "Research Paper",
      image: research,
      file: research
    },
    {
      title: "Workshop",
      image: workshop,
      file: workshop
    },
    {
  title: "Practice Arrays",
  image: arrays,
  file: arrays
},
{
  title: "Infosys Java",
  image: java,
  file: java
},
{
  title: "Machine Learning",
  image: machineLearning,
  file: machineLearning
},
{
  title: "Python",
  image: python,
  file: python
},
{
  title: "SQL",
  image: sql,
  file: sql
},
{
  title: "Stacks & Queues",
  image: stacks,
  file: stacks
}
  ];

  return (
    <section className="section" id="certificates">

      <h2>Certificates</h2>

      <div className="certificate-grid">

        {certificates.map((cert,index)=>(

          <div className="certificate-card" key={index}>

            {cert.image ? (
              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-image"
              />
            ) : (
              <div className="certificate-placeholder">
                📄 PDF Certificate
              </div>
            )}

            <h3>{cert.title}</h3>

            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;