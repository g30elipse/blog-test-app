import React, {useState, useEffect} from 'react'
import FeaturedBlogs from '../../components/FeaturedBlogs'
import qs from 'qs';
import axios from 'axios';
import { API } from '../../vars'


const Blogs = () => {


    const [blogs, setBlogs] = useState([]);
    const [meta, setMeta] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchApiData()
    },[])


    const fetchApiData = async () => {
        setIsLoading(true);
        const query = qs.stringify({
            populate: "*",
            pagination: {
                page: 1,
                pageSize: 10
            }
        })
        try {
            const { data } = await axios.get(API + `posts?${query}`);
            setBlogs(data.data);
            setMeta(data.meta);
        }
        catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }


    if (isLoading) {
        return (
            <div className='main-page-container'>
                <h1>Loading....</h1>
            </div>
        )
    }



    return  (
        <div className='main-page-container'>
            <h3>ALL BLOGS</h3>
            <FeaturedBlogs blogs={blogs}/>
        </div>
    )
}

export default Blogs
