import { useRouteLoaderData } from "react-router-dom";

type DataObject = {
    "active_cryptocurrencies":string,
    "upcoming_icos":number,
    "ongoing_icos":number,
    "ended_icos":number,
    "markets":number,
}


const GlobalData = () => {
    
    const globalData  = useRouteLoaderData('root') as DataObject;

  return (
    <div className="bg-stone-600 text-stone-200 font-semibold py-[2px] px-4 fixed w-fit top-[45.8px] sm:top-[65.8px] flex flex-nowrap gap-2 md:gap-10">

        {globalData && <><div className="flex items-center justify-center md:justify-start text-xs md:text-sm gap-4 sm:gap-2 animate-infinite-scroll w-[180vw] very-small-screens small-screens sm:w-[100vw]">
            <p>ACTIVE CRYPTOCURRENCIES: {globalData["active_cryptocurrencies"]}</p>
            <p>MARKETS: {globalData["markets"]}</p>
            <p>UPCOMING ICOs: {globalData["upcoming_icos"]}</p>
            <p>ONGOING ICOs: {globalData["ongoing_icos"]}</p>
            <p>ENDED ICOs: {globalData["ended_icos"]}</p>
        </div>
        <div className="flex items-center justify-center md:justify-start text-xs md:text-sm gap-2 animate-infinite-scroll w-[180vw] very-small-screens small-screens sm:w-[100vw]" aria-hidden="true">
            <p>ACTIVE CRYPTOCURRENCIES: {globalData["active_cryptocurrencies"]}</p>
            <p>MARKETS: {globalData["markets"]}</p>
            <p>UPCOMING ICOs: {globalData["upcoming_icos"]}</p>
            <p>ONGOING ICOs: {globalData["ongoing_icos"]}</p>
            <p>ENDED ICOs: {globalData["ended_icos"]}</p>
        </div></>}

        {!globalData && <><div className="flex gap-8 items-center justify-center md:justify-start text-xs md:text-sm animate-infinite-scroll w-[100vw]" aria-hidden="true"><p>loading...</p><p>loading...</p><p>loading...</p><p>loading...</p><p>loading...</p></div><div className="flex gap-8 items-center justify-center md:justify-start text-xs md:text-sm animate-infinite-scroll w-[100vw]" aria-hidden="true"><p>loading...</p><p>loading...</p><p>loading...</p><p>loading...</p><p>loading...</p></div></>}

    </div>
  )
}

export default GlobalData;