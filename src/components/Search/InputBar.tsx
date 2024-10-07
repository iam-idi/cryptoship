import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_KEY, API_URL } from "../../private";

type InputBarProps = {
    setData:React.Dispatch<React.SetStateAction<[] | undefined>>,
    setIsPending:React.Dispatch<React.SetStateAction<boolean>>
}

const InputBar = ({setData, setIsPending}:InputBarProps) => {

    const [searchVal, setSearchVal] = useState<string>();

    const HandleSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            setIsPending(true);
            const res = await axios.get(`${API_URL}search/${searchVal}?x_cg_demo_api_key=${API_KEY}`);
            setData(res.data);
            toast.success('Coin/Token found');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!');
        } finally {
            setIsPending(false);
        }
    }

  return (
    <>
    <form onSubmit={HandleSubmit} className="mt-8 mb-12 sm:mb-16 pr-4 sm:pr-6 mx-auto flex items-center justify-center w-fit rounded-xl sm:rounded-2xl border-2 border-stone-400">
        <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder="Search for a coin/token" className='bg-inherit text-stone-500 placeholder:text-stone-400 placeholder:font-medium placeholder:text-xs sm:placeholder:text-sm text-sm sm:text-base p-[6px] sm:p-2 min-w-[200px] w-[80vw] sm:w-[60vw] inline-block outline-none caret-stone-500 rounded-xl sm:rounded-2xl'/>
        <FaSearch className="text-stone-500 text-lg sm:text-xl font-bold cursor-pointer transform active:scale-90"/>
    </form>
    </>
  )
}

export default InputBar;