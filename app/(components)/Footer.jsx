import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/**
 * Footer component for the application.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-nav text-white text-center py-4">
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/Mo-Gamer-2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/moeezabdul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </a>
      </div>
      <p className="mt-2">© {new Date().getFullYear()} Moeez Abdul</p>
    </footer>
  );
};

export default Footer;
