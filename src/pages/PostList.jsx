import MainNav from "../components/MainNav"
//import { useState, useEffect } from "react"
import { useEffect } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"

const PostList = () => {
    //const [ posts, setPosts ] = useState([])

    const {posts, fetchData} = useGlobalContext()

    useEffect( () => {
        //axios.get('http://localhost:3000/api/posts')
        //.then( res => setPosts(res.data))

        fetchData()
    }, [] )
    
    return(
        <>
            <MainNav/>
            <div className="container">
                <div className="row">
                    {
                        posts.map((elem) => {
                            return(
                                <div key={elem.id} className="col-4">
                                    <NavLink to={`/list/${elem.id}`}>
                                    <div className="card">
                                        {/*<img className="card-img-top" src="" alt="" />*/}
                                        <div className="card-body">
                                            <h4 className="card-title">{elem.title}</h4>
                                            <p className="card-text">{elem.content}</p>
                                        </div>
                                    </div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PostList