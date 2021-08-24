import ItemList from "./ItemList/ItemList";
import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import { Row,Spinner } from 'react-bootstrap'
       
const ItemListContainer = ( ) => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        setTimeout(()=>{
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=27870cb5f928497b923d5094ff8de810')
            .then(response => response.json())
            .then(films =>{
                let arr = []
                for(let film of films.results){
                    const obj = {id: film.id, title:film.title, description: film.overview, price: 150, pictureUrl: `https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                    arr.push(obj)
                }
                setFilms(arr)
                setLoading(false)
                })
            .catch(e => {
                console.log("Se produjo el siguiente error ",e)
            })
        },2000)
    },[])

    return(
        <>
            {loading && 
                <Row className="justify-content-md-center mt-5" >
                    <Spinner animation="grow"/>
                </Row>
            } 
            {!loading && <div>
                <ItemList items={films}/>
            </div>}
        </>
)}

export default ItemListContainer;