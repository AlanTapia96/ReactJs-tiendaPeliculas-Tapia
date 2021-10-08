import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../ItemListContainer/ItemList/ItemList"
import { Row, Spinner } from "react-bootstrap"
import { getDocs, makeQuery } from "../../../firebase"

const CategoriesListContainer = ( ) => {

    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const [empty, setEmpty] = useState(false)
    const { idCategory } = useParams()
    
    useEffect(()=>{
        setLoading(true);
        async function getFilmsByCategory() {
            let idNumber = parseInt(idCategory)
            const filmData = await makeQuery('films','category','array-contains', idNumber);
            const docs = await getDocs(filmData);
            const arr = [];
            docs.forEach( (doc) => arr.push(doc.data()) )
            if(arr.length > 0)
                setFilms(arr)
            else 
                setEmpty(true);
            setLoading(false)
        }              
        getFilmsByCategory();
    },[idCategory])
    
    return(
        <>

            {loading && 
                <Row className="justify-content-md-center mt-5" >
                    <h3>Aguarde unos instantes..</h3><Spinner animation="grow" className="mb-5 ms-4"/>
                </Row>
            } 
            {!loading && !empty &&<>
                            <ItemList items={films}/>
                        </>
            }
            {!loading && empty && 
                <>
                      <h3>No hay pelis para la categoría</h3>     
                </>
            }
        </>
    )

}

export default CategoriesListContainer;