import { NavLink } from "react-router";

export function Navbar() {
  return (
    <>
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu__item menu__item-active" : "menu__item"
          }>Главная</NavLink>

      </nav>
    </>
  );
}
