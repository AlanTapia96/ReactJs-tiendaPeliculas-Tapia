import { useState, useEffect } from "react"
import CategoriesListDropDown from "./CategoriesListDropDown/CategoriesListDropDown"

const Categories = () => {
    
    const [categories,setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const getCategories = async () => {
            const categoriesData = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=27870cb5f928497b923d5094ff8de810`).then(response => response.json())
            setCategories(categoriesData)
            setLoading(false)
        }
        getCategories();
        
        
    },[]) 

    return(
        <>
        {!loading && <CategoriesListDropDown categoriesData={categories} />}
        </>
    )

}

export default Categories