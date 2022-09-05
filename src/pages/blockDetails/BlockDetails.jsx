import React, { useState, useEffect } from 'react'
import { Link, NavLink, useParams} from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import { API } from '../../vars'




const BlockDetails = () => {
    const params = useParams();
    
    
    const [blog, setBlog] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const blogId = params.blogId;

    useEffect(() => {
        fetchApiData()
    },[])


    const fetchApiData = async () => {
        setIsLoading(true);
        const query = qs.stringify({
            populate: "*",
        })
        
        try {
            const { data } = await axios.get(API + `posts/${blogId}?${query}`);
            setBlog(data.data);
            
        }
        catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }


    

    if (isLoading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    if (blog === undefined) {
        return (
            <div>Invalid</div>
        )

    }

    console.log("blog detail", blog)

    let image = blog.attributes.cover.data.attributes.url
    return (

        <div className="blockDetails">

            <NavLink to="/blogs" > Back</NavLink>

            <h2>{blog.attributes.title}</h2>

            <div className="box" key={blog.id}>
                <div className="latestCard">
                    <div className="card1">
                        <img className='imgdetails' src={`http://localhost:1337${image}`} alt="logo" />
                        <br />
                        <br />
                        {/* <NavLink to="/blogs/details" > {details.attributes.title}</NavLink> */}

                        <br />
                        {blog.attributes.createdAt.slice(0, 10)}
                        <br />
                        <br />
                        {blog.attributes.content}
                    </div>
                </div>
            </div>
        </div >

    )
}

export default BlockDetails
