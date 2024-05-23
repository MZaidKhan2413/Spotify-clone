import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function Navigation() {
  const navs = [
    { value: "Home", link: "/", logo: <MdHomeFilled className="fs-2 me-3"/> },
    { value: "Search", link: "/", logo: <IoIosSearch className="fs-2 me-3"/> },
  ];

  return (
    <nav className="navigation p-3 d-flex flex-column justify-content-evenly">
      {navs.map((nav) => (
        <li className="p-1">
          <a href={nav.link} className="fw-bold fs-6">
            {nav.logo}
            {nav.value}
          </a>
        </li>
      ))}
    </nav>
  );
}
