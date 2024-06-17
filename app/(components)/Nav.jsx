import { faHome, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

/**
 * Navigation bar component for the application.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
const Nav = () => {
  return (
    <header>
      <nav className="flex justify-between items-center w-full px-4 py-4 bg-nav">
        {/* Navigation bar container with background color, padding, and flex layout */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="text-default-text font-extrabold lg:text-2xl md:text-2xl">
              Task<span className="text-yellow-400 ">Flare</span>
            </div>
          </Link>
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
    </header>
  );
};

export default Nav;
