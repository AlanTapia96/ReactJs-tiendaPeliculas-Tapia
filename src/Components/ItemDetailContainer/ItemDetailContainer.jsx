import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { makeQuery, getDocs } from "../../firebase"
import styles from './ItemDetailContainer.module.css'

const ItemDetailContainer = ( ) => {
    const { filmId } = useParams();
    let filmString = parseInt(filmId)
    const [filmDetail,setFilmData] = useState()
    const [loading,setLoading] = useState(true);

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
        <div className={styles.itemDetailContainer}>
         {!loading && <ItemDetail film={filmDetail}/>}
        </div>
    )
}


export default ItemDetailContainer