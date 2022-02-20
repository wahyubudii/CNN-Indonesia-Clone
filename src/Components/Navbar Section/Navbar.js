import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <div className="bg-black sticky">
      <div className="container mx-auto">
        <nav className="flex py-4 pl-64 items-center">
          <Logo link="/logo_cnn.png"/>
          <Nav/>
        </nav>
      </div>
    </div>
  );
}
