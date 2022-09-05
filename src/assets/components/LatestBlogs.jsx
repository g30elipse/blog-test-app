import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './Context'
import { Link, NavLink } from 'react-router-dom';




const LatestBlogs = () => {

    const { data, isLoading, detailPost } = useGlobalContext();






    return (

        <div className="container-right">


            {
                data.map((currPost) => {
                    // console.log(currPost.attributes.title)

                    // console.log(currPost.id)



                    const { attributes } = currPost
                    let image = attributes.cover.data.attributes.url

                    // console.log(image)
                    // console.log(attributes.cover.data.attributes.url)

                    return (
                        <div className="box" key={currPost.id}>

                            <div className="latestCard">

                                <img src={`http://localhost:1337${image}`} alt="logo" />


                                <div className="card1">

                                    {/* <NavLink to={`/latestblog/ ${attributes.title}`}> {attributes.title}</NavLink> */}

                                    <NavLink to="/blogs/details" onClick={() => detailPost(currPost.id)}> {attributes.title}</NavLink>
                                    <br />
                                    {attributes.createdAt.slice(0, 10)}
                                    <br />
                                    <br />
                                    {attributes.excerpt}
                                </div>

                            </div>



                        </div>
                    )



                })
            }
        </div >

    )
}

export default LatestBlogs
