import Link from "next/link";

const DropdownMenu = () => {
  return (
    <div className="relative inline-block text-left bg-yellow-400 hover:bg-yellow-200 text-purple-accent rounded-md">
      <Link href="/LoginPage" className="block px-2 py-2">
        Options
      </Link>
    </div>
  );
};

export default DropdownMenu;
