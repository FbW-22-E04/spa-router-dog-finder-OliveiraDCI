import { Outlet } from "react-router-dom";

function Header({ dogs }) {
  return (
    <main>
      <header>
        <h1>Helloz we have dogz... 🐶 click on their name to see more</h1>
      </header>
      <Outlet />
    </main>
  );
}

export default Header;
