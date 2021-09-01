import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { makeQuery, getDocs } from "../../firebase"

const ItemDetailContainer = ( ) => {
    const { filmId } = useParams();
    let filmString = parseInt(filmId)
    const [filmDetail,setFilmData] = useState()
    const [loading,setLoading] = useState(true);
    
    // useEffect( () => {
    //     async function getFilmsData(){
    //         const filmData = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=27870cb5f928497b923d5094ff8de810`).then(response => response.json())
    //         let film = {id: filmData.id, title:filmData.title, description: filmData.overview, price: 150, pictureUrl: `https://image.tmdb.org/t/p/w500/${filmData.poster_path}`}
    //         setFilmData(film)
    //         setLoading(false)
    //     }
    //     getFilmsData();
    // },[filmId])

    useEffect( () => {
        async function getFilm() {
            const filmData = await makeQuery('films','id', '==', filmString);
            const docs = await getDocs(filmData);
            docs.forEach( (doc) => setFilmData(doc.data()))
            setLoading(false)
        }
        getFilm()
    },[filmId])

    return(
        <>
         {!loading && <ItemDetail film={filmDetail}/>}
        </>
    )
}


export default ItemDetailContainer