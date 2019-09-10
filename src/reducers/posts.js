const initialState = [];

export default function posts(state = initialState, action) {
    if(action.type === 'FETCH_POSTS_SUCCESS'){
        //console.log("FETCH_POSTS_SUCCESS");
        return action.payload;
    }
    return state;
}