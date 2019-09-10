
export default function posts(state = [], action) {
    if(action.type === 'FETCH_POST_SUCCESS'){
        return action.payload;
    }
    return state;
}