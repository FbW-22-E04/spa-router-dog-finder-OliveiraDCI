import { Outlet } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Outlet />
      <p>FOOTER</p>
    </footer>
  );
}

export default Footer;
