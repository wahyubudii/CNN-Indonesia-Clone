import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <nav className="flex py-3 px-48 items-center sticky">
          <Logo className="w-20" link="/logo_cnn.png"/>
          <Nav/>
        </nav>
      </div>
    </div>
  );
}
