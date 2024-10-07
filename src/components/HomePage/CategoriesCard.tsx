type CategoriesCardProps =  {
  name:string,
  image:string,
}

const CategoriesCard = ({name, image}:CategoriesCardProps) => {
  return (
    <div>
        <img src={image} alt="" />
        {name}
    </div>
  )
}

export default CategoriesCard;