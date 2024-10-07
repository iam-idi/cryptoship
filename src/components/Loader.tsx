import { DotLoader } from 'react-spinners';

const Loader = () => {
  return (
    <>
        <DotLoader color="gray" cssOverride={{margin:'150px auto 50px'}}/>
        <h3 className="text-center text-stone-500 text-sm sm:text-base font-bold">
            Loading...
        </h3>
    </>
  )
}

export default Loader;