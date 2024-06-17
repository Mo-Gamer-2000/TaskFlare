import { faHome, faListCheck } from "@fortawesome/free-solid-svg-icons"; // Import specific icons from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import Link from "next/link"; // Import the Link component from Next.js

/**
 * Navigation component for the application.
 * @returns {JSX.Element} The rendered navigation component.
 */
const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      {" "}
      {/* Main navigation container */}
      <div className="flex items-center space-x-4">
        {" "}
        {/* Container for navigation links */}
        <Link href="/">
          {" "}
          {/* Link to the home page */}
          <FontAwesomeIcon icon={faHome} className="icon" /> {/* Home icon */}
        </Link>
        <Link href="/TaskPage/new">
          {" "}
          {/* Link to the new task page */}
          <FontAwesomeIcon icon={faListCheck} className="icon" />{" "}
          {/* New task icon */}
        </Link>
      </div>
      <div>
        <p className="text-default-text">Example@gmail.com</p>{" "}
        {/* Placeholder for user email or other information */}
      </div>
    </nav>
  );
};

export default Nav;
