"use client";
import { useState } from "react";
import Link from "next/link";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-yellow-400 shadow-sm px-4 py-2 bg-white text-sm font-medium text-purple-accent hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          Options
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col py-2">
            <Link
              href="/create-user"
              className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
            >
              Create User
            </Link>
            <Link
              href="/client-member"
              className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
            >
              Client Member
            </Link>
            <Link
              href="/member"
              className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
            >
              Member
            </Link>
            <Link
              href="/public"
              className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
            >
              Public
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
