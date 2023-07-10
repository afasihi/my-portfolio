import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <span>Abderrahman Fasihi</span>
      <TypeAnimation
        sequence={[
          "Front-End Developer",
          1500,
          "&",
          500,
          "Mobile Developer",
          1500,
        ]}
        wrapper="span"
        speed={20}
        className="type-animation"
        repeat={Infinity}
      />
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/afasihi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={35} />
        </a>
        <a
          href="https://github.com/afasihi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={35} />
        </a>
      </div>
    </div>
  );
};

export default Home;
