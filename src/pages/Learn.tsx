import { PulseLoader } from "react-spinners";


const Learn = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-28">
        <h1 className="text-lg sm:text-2xl font-extrabold text-stone-700 text-center mb-2 md:mb-4">Coming Soon</h1>
        <PulseLoader color="gray" cssOverride={{margin:'15px auto'}}/>
    </div>
  )
}

export default Learn;