const initialState = {
    personData: null
}

export const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'SET_DETAILS':
            return {
                personData: payload
            }
        case 'GET_DETAILS':
            return {
                personData: payload
            }
        default:
            return state;
    }
}