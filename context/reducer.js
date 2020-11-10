export const CHANGE_HEADER = "ADD_TOKEN"

export const initialState = {
    header: false
}

export default (state, action) => {
    switch (action.type) {
        case CHANGE_HEADER:
            return {
                ...state,
                header: !state.header
            }
        default:
            return state
    }
}