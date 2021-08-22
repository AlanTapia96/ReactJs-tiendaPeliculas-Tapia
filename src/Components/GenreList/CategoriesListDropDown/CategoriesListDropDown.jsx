import { useEffect, useState } from "react"
import { DropdownButton } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './CategoriesListDropDown.css'

const CategoriesListDropDown = ( {categoriesData} ) => {
    
    const [categories, setCategories] = useState(null)

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);


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
            <DropdownButton title="Categoría" className="arrow-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onToggle={() => setIsClicked(!isClicked)}
                show={isClicked || isHovered}
            >
                {categories}
             </DropdownButton>
        </div>
    )
}

export default CategoriesListDropDown