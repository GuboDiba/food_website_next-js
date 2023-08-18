import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-black p-2">
      <div className="container flex justify-between">
        <a className="text-2xl font-bold ml-4 p--2 mr-10">Foodle</a>
        <ul className="flex gap-60">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Offer">Offer</Link>
          </li>
          <li>
            <Link href="/Service">Services</Link>
          </li>
          <li>
            <Link href="/Menu">Menu</Link>
          </li>
          <li>
            <Link href="/About Us">About Us</Link>
          </li>
        </ul>
        <div className="flex gap-4 items-center mr-4">
          <a className="text-red-500 ml-10">Login</a>
          <button className="bg-red-500 text-white py-2 px--3 rounded-lg">
            SignUp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
