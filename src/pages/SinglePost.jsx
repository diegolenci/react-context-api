import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {

    const{id} = useParams()

    const [SinglePost, setSinglePost] = useState({
        id:'',
        title:'',
        content:'',
        image:'',
        tags:[]
    })

    useEffect( () => {
        axios.get(`http://localhost:3000/api/posts/${id}`)
        .then( res => setSinglePost(res.data))
    }, [] )

    return(
        <>
            <h1>Singolo prodotto: {id} </h1>
            <h2>Titolo: {SinglePost.title}</h2>
            <h5>Descrizione: {SinglePost.content}</h5>
            <ul>
                {
                    SinglePost.tags.map((elem, id) => {
                    return(
                        <li key={id}>{elem}</li>
                    )
                    })
                }
            </ul>
        </>
    )
}

export default SinglePost