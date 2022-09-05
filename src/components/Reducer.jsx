const reducer = (state, action) => {

    switch (action.type) {

        case "LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,

            }

        case "DETAIL_POST":
            return {
                ...state,
                details: state.data.find((currElem) => currElem.id === action.payload)

                // console.log(`curr Elem : ${currElem.id} and match : ${action.payload}`)



            }

    }



    return state
}




export default reducer