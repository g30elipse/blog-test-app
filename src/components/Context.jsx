// 1)  context creation
// 2)  provider
// 3)  consumer lengthy, remove and replace with
// 3)  useContext hook


import React, { useContext, useReducer, useEffect } from "react";
import Reducer from './Reducer'
import axios from 'axios'
import qs from 'qs'
let API = "http://localhost:1337/api/posts";

const initialState = {
    data: [],
    details: undefined

};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);





    const fetchApiData = async (url) => {
        dispatch({ type: "LOADING" });

        const query = qs.stringify({
            populate: "*",
            pagination: {
                page: 1,
                pageSize: 2
            }

        })
        try {
            const { data } = await axios.get(url + `?${query}`);
            console.log(data)

            dispatch({
                type: "GET_STORIES",
                payload: {
                    data: data.data
                }
            })


        }
        catch (error) {
            console.log(error)
        }

    }



    const detailPost = (id) => {
        dispatch({ type: "DETAIL_POST", payload: id })

    }






    useEffect(() => {
        fetchApiData(API);
    }, [])


    return (
        <AppContext.Provider value={{ ...state, detailPost }}>
            {children}
        </AppContext.Provider>
    )
}




//creating custom Hook

const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext }