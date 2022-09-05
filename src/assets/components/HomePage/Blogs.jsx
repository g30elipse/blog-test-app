import React from 'react'
import { useGlobalContext } from '../Context'
import FeaturedBlogs from '../FeaturedBlogs'

const Blogs = () => {

    const { data, isLoading } = useGlobalContext();


    if (isLoading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }



    return (
        <div className='blogsContainer'>
            <h3>ALL BLOGS</h3>
            <FeaturedBlogs />
        </div>
    )
}

export default Blogs
