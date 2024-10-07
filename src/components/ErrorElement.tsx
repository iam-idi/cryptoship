import { HashLoader } from 'react-spinners';
import Header from './Header';
import Footer from './Footer';
import { useRouteError } from 'react-router-dom';
// import { ErrorInfo } from 'react';

const ErrorElement = () => {
  const error:Error = useRouteError() as Error;
  return (
    <div className="bg-stone-100 h-svh">
        <Header />
        <div className="flex justify-center items-center flex-col h-[94svh] sm:h-[93svh] pt-20">
            <h1 className="text-lg sm:text-2xl font-extrabold text-stone-700 text-center">ERROR</h1>
            <HashLoader color="gray" cssOverride={{margin:'15px auto'}}/>
            <h2 className="text-sm sm:text-base font-semibold sm:font-bold text-stone-500 text-center mb-10">{error.message ? error.message : "Something went wrong!"}</h2>
        </div>
        <Footer />
    </div>
  )
}

export default ErrorElement;