

export default function CountryList({countrys}) {
    const{emoji,country} = countrys


  return (
    <div style={{display:'flex',flexDirection:"column"}}>
        <span>{emoji}</span>
        <h2>{country}</h2>
    </div>
  )
}
