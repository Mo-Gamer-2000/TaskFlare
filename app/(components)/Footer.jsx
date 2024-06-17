import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component from Font Awesome React
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importing specific brand icons (GitHub and LinkedIn)

/**
 * Footer component for the application.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-nav text-white p-4 text-center">
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
        <a
          href="https://www.linkedin.com/in/moeezabdul/" // Link to LinkedIn profile
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Security best practice for opening external links
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          {/* LinkedIn icon with larger size */}
        </a>
      </div>
      <p className="mt-2">&copy; {new Date().getFullYear()} Moeez Abdul</p>
      {/* Copyright notice with current year and author's name */}
    </footer>
  );
};

export default Footer; // Exporting Footer component as default
