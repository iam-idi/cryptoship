import InputBar from "../components/Search/InputBar";
import { useState } from "react";
import Loader from "../components/Loader";
import HomeDetails from "../components/HomePage/HomeDetails";
import SearchDetails from "../components/Search/SearchDetails";

// interface DataObject {
//   name: string
// }

// type DataResProps =  DataObject[]

const Home = () => {

  const [data, setData] = useState<[]>();
  const [isPending, setIsPending] = useState<boolean>(false);

  return (
    <div>
        <InputBar setData={setData} setIsPending={setIsPending} />
        {!isPending && !data && <HomeDetails />}
        {isPending && <Loader />}
        {data && <SearchDetails data={data} />}
    </div>
  )
}

export default Home;