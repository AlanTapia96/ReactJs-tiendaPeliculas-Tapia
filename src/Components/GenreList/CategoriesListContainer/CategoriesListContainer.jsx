import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../ItemListContainer/ItemList/ItemList"
import { Row, Spinner } from "react-bootstrap"
import { getDocs, makeQuery } from "../../../firebase"

const CategoriesListContainer = ( ) => {

    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams();

    /*useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=27870cb5f928497b923d5094ff8de810')
            .then(response => response.json())
            .then(films =>{
                let arr = []
                for(let film of films.results){
                    if((film.genre_ids).includes(parseInt(idCategory))){
                        const obj = {id: film.id, title:film.title, description: film.overview, price: 150, pictureUrl: `https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                        arr.push(obj)
                    }
                }
                setFilms(arr)
                setLoading(false)
                })
            .catch(e => {
                console.log("Se produjo el siguiente error ",e)
            })
        },2000)
    },[idCategory])*/
    
    useEffect(()=>{
        setLoading(true);
        async function getFilmsByCategory() {
            let idNumber = parseInt(idCategory)
            const filmData = await makeQuery('films','category','array-contains', idNumber);
            const docs = await getDocs(filmData);
            const arr = [];
            docs.forEach( (doc) => arr.push(doc.data()) )
            setFilms(arr)
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
            {!loading && <>
                            <ItemList items={films}/>
                        </>
            }
            

        </>
    )

}

export default CategoriesListContainer;