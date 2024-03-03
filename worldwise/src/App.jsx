import{BrowserRouter, Route, Routes} from "react-router-dom"
import Homepages from "./pages/Homepages"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import NotFoundPage from "./pages/NotFoundPage"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import Cities from "./component/Cities"
import { useEffect, useState } from "react"
import Country from "./component/Country"


function App() {
  const[cities,setCities] = useState([])
  const[isLoading,setIsLoading] = useState(false)

  function onDelete(id){
    
    setCities((cities)=>cities.filter((item)=>item.id !== id))
}

  useEffect(function(){
    async function getCities(){
      try{
        setIsLoading(true)
        const res = await fetch("http://localhost:8000/cities")
        if (!res.ok){
          throw new Error("Data not found")
        }
        const data = await res.json()
        
        setCities(()=>data)
        

      }catch(err){
        console.log(err.message)
      }finally{
        setIsLoading(false)
      }

    }
    getCities()
  },[])

  return (
  
    <BrowserRouter>
    <Routes>
      <Route index element={<Homepages/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="price" element={<Pricing/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="app" element={<AppLayout/>}>
        
        <Route index element={<Cities isLoading={isLoading} cities={cities} onDelete={onDelete}/>} />
        <Route path="cities" element={<Cities isLoading={isLoading} cities={cities}onDelete={onDelete} />}/>
        <Route path="country" element={<Country isLoading={isLoading} cities={cities}/>}/>
        <Route path="form" element={<p>Form</p>}/>
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
 


