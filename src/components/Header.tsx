import Hero from "./Hero";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="h-screen bg-hero bg-center bg-cover relative">
      <MainNav />
      <Hero />
    </header>
  );
};

export default Header;
