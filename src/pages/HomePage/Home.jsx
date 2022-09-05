import React, { useEffect, useState } from 'react'
import qs from 'qs';
import axios from 'axios';
import { API } from '../../vars'
import LatestBlogs from '../../components/LatestBlogs'
import FeaturedBlogs from '../../components/FeaturedBlogs'



const HomePage = () => {

    const [blogs, setBlogs] = useState([]);
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    const [meta, setMeta] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchBlogs()
        fetchFeaturedBlogs()
    },[])


    const fetchBlogs = async () => {
        setIsLoading(true);
        const query = qs.stringify({
            populate: "*",
            sort: 'createdAt:desc',
            pagination: {
                page: 1,
                pageSize: 5
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

    const fetchFeaturedBlogs = async () => {
        setIsLoading(true);
        const query = qs.stringify({
            populate: "*",
            filters: {
                isFeatured: true
            },
            pagination: {
                page: 1,
                pageSize: 3
            }
        })
        try {
            const { data } = await axios.get(API + `posts?${query}`);
            setFeaturedBlogs(data.data);
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



    return (
        <div className='main-page-container'>
            <h1>Total Posts: {meta ? meta.pagination.total : 0}</h1>
            <div className='content'>
            <div className='homeContainerleft'>
                <h3>FEATURED BLOGS</h3>

                <FeaturedBlogs blogs={featuredBlogs}/>
            </div>

            <div className='homeContainerright'>
                <h3>LATEST BLOGS</h3>
                <LatestBlogs blogs={blogs} />
            </div >
            </div>
        </div>

    )

}

export default HomePage
