import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';



const FeaturedBlogs = (props) => {

    const { blogs  } = props;


    return (

        <div className="container">


            {
                blogs.map((currPost) => {
                    const { attributes } = currPost

                    return (
                        <div className="box" key={currPost.id}>

                            <div className="featureCard">

                                <NavLink to="/blogs/details" onClick={() => detailPost(currPost.id)}> {attributes.title}</NavLink>

                                <br />
                                {attributes.publishedAt.slice(0, 10)}
                                <br />
                                <br />
                                {attributes.excerpt}

                            </div>
                        </div>
                    )



                })
            }
        </div >

    )
}

export default FeaturedBlogs
