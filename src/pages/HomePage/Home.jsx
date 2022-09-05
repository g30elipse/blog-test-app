import React from 'react'
import { useGlobalContext } from '../../components/Context'
import LatestBlogs from '../../components/LatestBlogs'
import FeaturedBlogs from '../../components/FeaturedBlogs'



const HomePage = () => {

    const { data, isLoading } = useGlobalContext();

    if (isLoading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }



    return (
        <div>

            <div className='homeContainerleft'>
                <h3>FEATURED BLOGS</h3>

                <FeaturedBlogs />
            </div>

            <div className='homeContainerright'>
                <h3>LATEST BLOGS</h3>
                <LatestBlogs />
            </div >

        </div>

    )

}

export default HomePage
