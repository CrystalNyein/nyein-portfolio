import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorFollower from './CursorFollower';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="ml-96 pl-20 max-w-3xl flex flex-col gap-36">
        <Outlet />
      </main>
      <Footer />
      <div className="max-md:hidden bg-full fixed top-0 left-0 w-screen h-screen -z-10"></div>
      <CursorFollower />
    </>
  );
};

export default Layout;
