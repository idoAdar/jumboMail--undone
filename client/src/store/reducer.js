const initState = {
    brands: null,
    repository: null,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_BRANDS':
            return {
                ...state,
                brands: action.payload
            }
        case 'GET_BY_ID':
            return {
                ...state,
                repository: action.payload
            }
        default: return state;
    }
}

export default reducer;