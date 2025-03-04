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
})

}