
export const removePost = (id) => dispatch =>{

    fetch(`https://simple-blog-api.crew.red/posts/${id}`,
        {
            method: 'DELETE',
        })
        .then(response => {
            return response.json();
        })
        .then(response => {
            dispatch({type: 'REMOVE_POST_SUCCESS', payload: response});
            return response
        }).catch( console.log );
};