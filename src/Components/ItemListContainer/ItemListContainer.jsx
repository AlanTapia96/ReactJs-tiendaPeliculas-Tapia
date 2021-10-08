import { useEffect, useState } from "react";
import { Row,Spinner } from 'react-bootstrap'
import { getDocs, getCollection } from "../../firebase"
import ItemList from "./ItemList/ItemList";
import styles from "./ItemListContainer.module.css"

       
const ItemListContainer = ( ) => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        async function fetchData() {
            const q = getCollection('films')
            const querySnapshot = await getDocs(q)
            let arr = []
            querySnapshot.forEach((doc) => {
                arr.push(doc.data())
            })
            setFilms(arr)
            setLoading(false)
        }
        fetchData()
    }, [])

    return(
        <div className={styles.itemListContainer}>
            {loading && 
                <Row className="justify-content-md-center mt-5" >
                    <Spinner animation="grow"/>
                </Row>
            } 
            {!loading && <div>
                <ItemList items={films}/>
            </div>}
        </div>
)}

export default ItemListContainer;