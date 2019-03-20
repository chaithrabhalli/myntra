
import axios from 'axios';
export const apiRequest = () => {
    return {
        type: 'API_REQUEST'
    }
}

export const apiSucces = (successData) => {
    return {
        type: 'API_SUCCESS',
        successData
    }
}

export const apiError = (errorData) => {
    return {
        type: 'API_ERROR',
        errorData
    }
}

export const apiCall = () => {
    return (dispatch) => {
        dispatch(apiRequest);

        axios.get('/api/data').then((response) => {
            dispatch(apiSucces(response.data));
        }).catch((error) => {
            dispatch(apiError(error));
        })

    }
}