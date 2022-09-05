import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../../components/Context'
import { Link, NavLink } from 'react-router-dom';




const BlockDetails = () => {

    const { data, isLoading, details } = useGlobalContext();

    console.log(data, isLoading, details)

    if (isLoading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    if (details === undefined) {
        return (
            <div>Invalid</div>
        )

    }

    let image = details.attributes.cover.data.attributes.url
    return (

        <div className="blockDetails">

            <NavLink to="/blogs" > Back to blogs</NavLink>

            <h2>{details.attributes.title}</h2>

            <div className="box" key={details.id}>
                <div className="latestCard">
                    <div className="card1">
                        <img className='imgdetails' src={`http://localhost:1337${image}`} alt="logo" />
                        <br />
                        <br />
                        <NavLink to="/blogs/details" > {details.attributes.title}</NavLink>

                        <br />
                        {details.attributes.createdAt.slice(0, 10)}
                        <br />
                        <br />
                        {details.attributes.content}
                    </div>
                </div>
            </div>
        </div >

    )
}

export default BlockDetails
