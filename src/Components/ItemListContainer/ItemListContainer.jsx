import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import { Row,Spinner } from 'react-bootstrap'
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

       
const ItemListContainer = () => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const [itemDetail,setItemDetail] = useState({})


    useEffect(()=>{

        setTimeout(()=>{
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=27870cb5f928497b923d5094ff8de810')
            .then(response => response.json())
            .then(films =>{
                console.log(films);
                let arr = []
                for(let film of films.results){
                    const obj = {id: film.id, title:film.title, description: film.overview, price: 150, pictureUrl: `https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                    arr.push(obj)
                }
                setFilms(arr)
                setLoading(false)
                setItemDetail({id: 150, title:'Parasite', description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita facere cupiditate nam vitae aliquid perferendis iusto. Officiis distinctio dolore, dolorum similique dignissimos vero obcaecati ut soluta vel aliquam, aut iste.
                Eligendi aut harum ipsum odio, ad libero consequuntur quae rem repellat veritatis tempora minus iste accusamus, nulla praesentium vitae mollitia tempore rerum quia blanditiis pariatur natus facilis! Facere, tenetur culpa!
                Ut, nostrum, magnam natus labore maiores facere vero asperiores vitae et excepturi aperiam dicta incidunt quaerat tempora minima perferendis veritatis voluptas optio minus autem eveniet quam laboriosam consequatur? Atque, similique!
                Et explicabo voluptate modi ducimus, iusto saepe perferendis dolorem excepturi facilis, assumenda pariatur ipsum! Laborum quod quidem vitae, ea odio commodi necessitatibus ad numquam possimus architecto soluta iusto sequi. Minus?
                In ipsa minima sit perspiciatis deserunt assumenda et eveniet. Quae ipsam cum consectetur vel rerum veniam debitis? Mollitia nulla eum, ea, omnis velit nesciunt ducimus et, officia illo unde accusantium.`, price: 150, pictureUrl: `https://image.tmdb.org/t/p/w500//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`});
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
                <ItemDetailContainer filmDetail={itemDetail} />
            </div>}
        </>
)}

export default ItemListContainer;