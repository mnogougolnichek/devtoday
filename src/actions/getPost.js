
export const getPost = (id) => dispatch =>{

    fetch(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response,"post");
            dispatch({type: 'FETCH_POST_SUCCESS', payload: response});
            return response
        }).catch( console.log );
};