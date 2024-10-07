import { ClimbingBoxLoader } from 'react-spinners';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-28">
        <h1 className=" text-4xl sm:text-6xl font-extrabold text-stone-700 text-center mb-2 sm:mb-4 md:mb-8">404</h1>
        <ClimbingBoxLoader color="gray" cssOverride={{margin:'15px auto'}}/>
        <h2 className="text-sm sm:text-base font-semibold sm:font-bold text-stone-500 text-center mb-10">Page not found</h2>
    </div>
  )
}

export default NotFound;