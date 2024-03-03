import styles from "./CityList.module.css"

export default function CityList({city,onDelete}) {
    const {cityName ,emoji ,date,id} = city
    function change(date){
        const time = new Date(date)
        const year = time.getFullYear().toString()
        const day = time.getMonth().toString()
        const month = time.getMonth().toString()
        
        console.log(year)
        console.log(day)
        console.log(month)

        return `${month}/${day}/${year}`
    }

    
    

  return (
    <div className={styles.list}>
        <span className={styles.emoji}>{emoji}</span>
        <h1 >{cityName}</h1>
        <time>{change(date)}</time>
        <button onClick={()=>onDelete(id)} style={{backgroundColor:"lightgray" , marginLeft:"20px"}}>❌</button>
    </div>
  )
}
