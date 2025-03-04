import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

const [ posts, setPosts ] = useState([])

const [SinglePost, setSinglePost] = useState({
    id:'',
    title:'',
    content:'',
    image:'',
    tags:[]
});

//chiamata per tutti i post
const fetchData = () => {
    axios.get('http://localhost:3000/api/posts')
        .then( res => setPosts(res.data))
};
//chiamata per singolo post
const getPostId = (id) => {
    axios.get(`http://localhost:3000/api/posts/${id}`)
        .then( res => setSinglePost(res.data))
};
//return del provider
const value = {
    posts, SinglePost, fetchData, getPostId
}
return(
    <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
)
}