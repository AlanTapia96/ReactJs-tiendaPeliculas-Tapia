import ItemList from "./ItemList/ItemList";
import { useEffect, useState } from "react";
import { Row,Spinner } from 'react-bootstrap'
import { getDocs, makeQuery, getCollection, add } from "../../firebase"
import "./ItemListContainer.css"

       
const ItemListContainer = ( ) => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)

    //Código para cargar Firebase con la API de películas
    /*useEffect(()=>{
        setTimeout(()=>{
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=27870cb5f928497b923d5094ff8de810')
            .then(response => response.json())
            .then(async films =>{
                let arr = []
                let i = 100;
                for(let film of films.results){
                    i += 50
                    let price = i
                    const obj = {id: film.id, title:film.title, description: film.overview, price: price, pictureUrl: `https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                    const response = await add(
                        {
                            id: obj.id,
                            title: obj.title,
                            description: obj.description,
                            price: obj.price,
                            pirctureUrl: obj.pictureUrl
                        },
                      );
                }

                setLoading(false)
                })
            .catch(e => {
                console.log("Se produjo el siguiente error ",e)
            })
        },10)
    },[])*/

    useEffect( () => {
        async function fetchData() {
            const q = getCollection('films')
            const querySnapshot = await getDocs(q)
            let arr = []
            querySnapshot.forEach((doc) => {
                arr.push(doc.data())
            })
            console.log(arr);
            setFilms(arr)
            setLoading(false)
        }
        fetchData()
    }, [])

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