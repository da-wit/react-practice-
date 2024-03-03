// import styles from "./Cities.module.css"
import Loading from "./Loading"
import CityList from "./CityList"

export default function Cities({isLoading,cities,onDelete}) {
   return (isLoading ?<Loading/> : cities.map((city)=>(
    <CityList key={city.id} city={city} onDelete={onDelete}/>
   )) )

    
    
}

