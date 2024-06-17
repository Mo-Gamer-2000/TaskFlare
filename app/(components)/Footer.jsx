import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/**
 * Footer component for the application.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-nav text-default-text py-4 px-2 text-center">
      {/* Footer container with background color, padding, and text color */}
      <div className="flex justify-center space-x-4">
        {/* Flex container for social media icons with space between */}
        <a
          href="https://github.com/Mo-Gamer-2000" // Link to GitHub profile
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Security best practice for opening external links
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          {/* GitHub icon with larger size */}
        </a>
        <p className="my-1 px-2">
          &copy; {new Date().getFullYear()} Moeez Abdul
        </p>
        {/* Copyright notice with current year and author's name */}
        <a
          href="https://www.linkedin.com/in/moeezabdul/" // Link to LinkedIn profile
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Security best practice for opening external links
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          {/* LinkedIn icon with larger size */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
