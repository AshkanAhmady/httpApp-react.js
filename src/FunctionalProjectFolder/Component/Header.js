// import "../index.css";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/", exact: true },
  { name: "New Comment", to: "/new-comment" },
];

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.to}>
                <NavLink
                  activeClassName="active_page"
                  to={link.to}
                  exact={link.exact || false}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
