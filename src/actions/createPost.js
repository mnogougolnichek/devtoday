
export const createPost = (data) => dispatch =>{

    fetch(`https://simple-blog-api.crew.red/posts`,
        {
            headers: {
                "Content-Type": "application/json",

            },
            method: 'POST',
            body: JSON.stringify({
                "title": "¯\\_(ツ)_/¯",
                "body": `(；一_一)`
            })
    })
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response,"post");
            dispatch({type: 'CREATE_POST_SUCCESS', payload: response});
            return response
        }).catch( console.log );
};