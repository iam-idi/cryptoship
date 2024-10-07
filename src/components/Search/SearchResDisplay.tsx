interface DataObjStructure {
    name : string,
    shortName : string
}
type SearchResDisplayProps = {
    data : DataObjStructure
}

const SearchResDisplay = ({ data }:SearchResDisplayProps) => {
  return (
    <div>
        {data.name}
        {data.shortName}
    </div>
  )
}

export default SearchResDisplay;