import { BiTrendingUp } from "react-icons/bi";
import { useRouteLoaderData } from "react-router-dom";

type trendsDataObject = {
  "coins": {
      "item": {
        "id": string,
        "coin_id": number,
        "name": string,
        "symbol": string,
        "market_cap_rank": number,
        "thumb": string,
        "small": string,
        "large": string,
        "slug": string,
        "price_btc": number,
        "score": number,
        "data": {
          "price": number,
          "price_btc": string,
          "price_change_percentage_24h": {
            "ngn": number,
            "usd": number,
          },
          "market_cap": string,
          "market_cap_btc": string,
          "total_volume": string,
          "total_volume_btc": string,
          "sparkline": string,
          "content": {
            "title": string,
            "description": string
          }
        }
      }
  }[],

  "nfts":{
      "id": string,
      "name": "ChameleonTravelClub",
      "symbol": string,
      "thumb": string,
      "nft_contract_id": number,
      "native_currency_symbol": string,
      "floor_price_in_native_currency":number,
      "floor_price_24h_percentage_change": number,
      "data": {
        "floor_price": string,
        "floor_price_in_usd_24h_percentage_change": string,
        "h24_volume": string,
        "h24_average_sale_price": string,
        "sparkline": string,
      }
  }[],

  "categories": {
      "id": number,
      "name": string,
      "market_cap_1h_change": number,
      "slug": string,
      "coins_count": number,
      "data": {
        "market_cap": number,
        "market_cap_btc": number,
        "total_volume": number,
        "total_volume_btc": number,
        "market_cap_change_percentage_24h": {
          "ngn": number,
          "usd": number,
        },
        "sparkline": string
      }
  }[]
}

const TrendsCard = () => {
  const data = useRouteLoaderData('home') as trendsDataObject;
  return (
    <>
    <h1 className="inline-block mb-2 sm:mb-4 text-sm sm:text-lg font-bold text-stone-600">Trending <BiTrendingUp className="inline-block text-lg sm:text-xl font-extrabold text-red-700" /> </h1>
    <div className="p-2 bg-stone-50 rounded sm:rounded-md shadow sm:shadow-md mb-8">
      <div className="flex justify-start items-center flex-wrap gap-3 sm:gap-6 p-2 sm:p-3 md:p-4 mb-3 sm:mb-6 border-b-2 border-stone-200 text-xs sm:text-sm font-bold text-stone-600">
        <img src={data["coins"][0].item.thumb} className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] rounded-full" alt=""/>
        <h2>
          {data["coins"][0].item.name}
        </h2>
        <h2>
          {data["coins"][0].item.symbol}
        </h2>
        <h2>
          {"$" + data["coins"][0].item.data.price}
        </h2>
        <h2>
          {data["coins"][0].item.data.market_cap}
        </h2>
        <h2>
          {data["coins"][0].item.data.total_volume}
        </h2>
        <h2>
          {"$" + data["coins"][0].item.data.price_change_percentage_24h.usd}
        </h2>
      </div>
      <div className="p-2 sm:p-3 md:p-4 mb-3 sm:mb-6 border-b-2 border-stone-200 text-sm sm:text-base font-semibold sm:font-bold text-stone-600">
        {data["nfts"][0].name}
      </div>
      <div className="p-2 sm:p-3 md:p-4 mb-3 sm:mb-6 border-b-2 border-stone-200 text-sm sm:text-base font-semibold sm:font-bold text-stone-600">
        {data["categories"][0].name}
      </div>
    </div>
    </>
  )
}

export default TrendsCard;