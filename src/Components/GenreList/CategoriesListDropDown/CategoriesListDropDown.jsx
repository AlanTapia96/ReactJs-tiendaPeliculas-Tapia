import { useEffect, useState } from "react"
import { DropdownButton } from "react-bootstrap"
import { Dropdown } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './CategoriesListDropDown.css'

const CategoriesListDropDown = ( {categoriesData} ) => {
    
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        
        const getCategories = categoriesData.genres.map( (categories) => 
            <div key={categories.id} >
                <Link to={`/categories/${categories.id}`} className='categoriesList-item'>{categories.name}</Link>
            </div>
            )
            setCategories(getCategories);
    },[])

    return(
        <div className="dropdown-categories">
            <DropdownButton title="Seleccione el género">
                {categories}
             </DropdownButton>
        </div>
    )
}

export default CategoriesListDropDown