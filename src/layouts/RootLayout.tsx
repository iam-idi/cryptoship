import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <div className="bg-stone-100 h-svh">
      <ToastContainer />
        <Header />
        <main className="bg-stone-100 min-h-[94svh] sm:min-h-[93svh] pt-14 sm:pt-20 px-2 sm:px-8">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout;