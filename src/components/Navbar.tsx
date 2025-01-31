import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="max-w-lg text-left flex flex-col gap-4 p-28 pr-0 mb-20 lg:fixed lg:top-0 lg:left-0 lg:h-screen">
      <h1 className="font-bold text-4xl sm:text-5xl tracking-wide">Nyein Chan Lay</h1>
      <h2 className="text-lg font-medium sm:text-xl">Full Stack Developer</h2>
      <p className="text-lg">I build pixel-perfect, engaging and accessible digital experiences.</p>
      <nav className="flex-1">
        <Link className="nav-item" to="about" spy={true} smooth={true} duration={200} offset={-150}>
          <span></span>About
        </Link>
        <Link className="nav-item" to="experience" spy={true} smooth={true} duration={200} offset={-150}>
          <span></span>Experience
        </Link>
        <Link className="nav-item" to="projects" spy={true} smooth={true} duration={200} offset={-150}>
          <span></span>Projects
        </Link>
      </nav>
      <div className="">
        <a href="">ICON</a>
        <a href="">ICON</a>
        <a href="">ICON</a>
        <a href="">ICON</a>
        <a href="">ICON</a>
        <a href="">ICON</a>
      </div>
    </header>
  );
};

export default Navbar;
