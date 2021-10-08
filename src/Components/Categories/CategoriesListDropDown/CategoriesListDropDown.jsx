import { useEffect, useState } from "react"
import { DropdownButton } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import styles from './CategoriesListDropDown.module.css'

const CategoriesListDropDown = ( {categoriesData} ) => {
    
    const [categories, setCategories] = useState(null)

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);


    useEffect(() => {
        
        const getCategories = categoriesData.genres.map( (categories) => 
            <div key={categories.id} >
                <NavLink activeClassName='active' to={`/categories/${categories.id}`} className={styles['categoriesList-item']}>{categories.name}</NavLink>
            </div>
            )
            setCategories(getCategories);
    }, [])

    return(
        <div className={styles['dropdown-categories']}>
            <DropdownButton title="Categorías" className={styles['arrow-none']}
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