const initialState = [];

export default function test(state = initialState, action) {
    if(action.type === "TEST_REDUCER"){
        return action.payload;
    }else{
        return state;
    }
}