
export const dataReducer = (state = {
    request: "",
    success: "",
    error: ""
}, action) => {
    switch (action.type) {
        case 'API_REQUEST':
            return Object.assign({}, state, { request: false })
        case 'API_SUCCESS':
            return Object.assign({}, state, { request: true, success: action.successData })
        case 'API_ERROR':
            return Object.assign({}, state, { request: true, error: action.errorData })
        default:
            return state
    }


}
