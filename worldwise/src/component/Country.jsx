import CountryList from "./CountryList";
import Loading from "./Loading";

export default function Country({isLoading,cities}) {
   
    const countrys = cities.reduce((arr,curr)=> {
   if(!arr.map((el)=>el.country).includes(curr.country)){
    return[...arr, {country:curr.country, emoji: curr.emoji}]
   }else return arr
   
    },[])
  return (
    <div>
        {isLoading? <Loading/> : countrys.map((country)=>(
            <CountryList countrys={country} key={country.country}/>
        )) }

    </div>
  )
}
