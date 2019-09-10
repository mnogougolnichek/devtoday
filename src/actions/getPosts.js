
export const getPosts = () => dispatch =>{

    fetch('https://simple-blog-api.crew.red/posts')
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(dispatch,"dispatch");
            dispatch({type: 'FETCH_POSTS_SUCCESS', payload: response});
            return response
        }).catch( console.log );
};