
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailContainer = ( ) => {
    const { filmId } = useParams();
    const [filmDetail,setFilmData] = useState({})
    
    useEffect( () => {
        async function getFilmsData(){
            const filmData = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=27870cb5f928497b923d5094ff8de810`).then(response => response.json())
            let film = {id: filmData.id, title:filmData.title, description: filmData.overview, price: 150, pictureUrl: `https://image.tmdb.org/t/p/w500/${filmData.poster_path}`}
            setFilmData(film)
        }
        getFilmsData();
    },[filmId])

    return(
        <>
         <ItemDetail film={filmDetail}/>
        </>
    )
}


export default ItemDetailContainer