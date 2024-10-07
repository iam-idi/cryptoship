import CategoriesCard from "./CategoriesCard";
import TrendsCard from "./TrendsCard";
import UtilityCoinImage from "../../assets/images/WhatsApp Image 2023-12-10 at 1.41.09 PM.jpeg"

const HomeDetails = () => {
  return (
    <div>
        <TrendsCard />
        <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
          <CategoriesCard name="Utility Coins" image={UtilityCoinImage}/>
          <CategoriesCard name="Stable Coin" image={UtilityCoinImage}/>
          <CategoriesCard name="Meme Coins" image={UtilityCoinImage}/>
          <CategoriesCard name="NFTs" image={UtilityCoinImage}/>
          <CategoriesCard name="Exchanges" image={UtilityCoinImage}/>
        </div>
    </div>
  )
}

export default HomeDetails;