import { faHome, faListCheck } from "@fortawesome/free-solid-svg-icons"; // Importing specific solid icons (Home and List Check)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component from Font Awesome React
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation

/**
 * Navigation bar component for the application.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      
      {/* Navigation bar container with background color, padding, and flex layout */}
      <div className="flex items-center space-x-4">
        
        {/* Flex container for navigation items with space between */}
        <Link href="/">
          
          {/* Link to home page */}
          <FontAwesomeIcon icon={faHome} className="icon" />
          {/* Home icon with specific styling class */}
        </Link>
        <Link href="/TaskPage/new">
          
          {/* Link to create new task page */}
          <FontAwesomeIcon icon={faListCheck} className="icon" />
          {/* List Check icon with specific styling class */}
        </Link>
      </div>
      <div>
        <p className="text-default-text">Example@gmail.com</p>
        {/* Placeholder email text with specific styling class */}
      </div>
    </nav>
  );
};

export default Nav; // Exporting Nav component as default
