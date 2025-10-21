import { NavLink, Link, Outlet } from "react-router";

function Header() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about">
      About
      </NavLink>
      <Link to="/contact">Contact</Link>
    </nav>
    <Outlet />
    </>
  );
}

export default Header