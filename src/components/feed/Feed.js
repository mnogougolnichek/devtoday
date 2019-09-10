import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {getPosts} from "../../actions/getPosts";
import {createPost} from "../../actions/createPost";
import {removePost} from "../../actions/removePost";
import {test} from "../../actions/test";


// const Feed = () => {
//     useEffect(()=>{console.log(mounted),[]})
//     return(
//         <div>
//             <div>POOOOOST</div>
//             <h1>{_.isString(post.title) && post.title}</h1>
//             <p>{_.isString(post.body) && post.body}</p>
//         </div>
//     )
// };

class Feed extends Component{
    componentDidMount() {
        const {getPosts, createPost, removePost} = this.props;
        //removePost(31);
        //createPost();
        getPosts();
        console.log(this.props.posts,"posts")
    }

    render() {
        const {posts} = this.props;
        this.props.test(555);
        console.log(posts,"posts");
        return(
            <div>
                <Link to={{pathname:'/rrr/879878', state:{a:999}}} state={999}>post</Link>
                {
                    posts && posts.map((x, i)=> <div key={i}>
                        <Link to={{pathname:`/post/${x.id}`, state:{id:x.id}}}>
                            <h2>{typeof x.title === "string" && x.title}</h2>
                            <div>{typeof x.content === "string" && x.content}</div>
                            <div><i>{typeof x.author === "string" && x.author}</i></div>
                            <div>{typeof x.date === "string" && x.date}</div>
                        </Link>
                    </div>)
                }
            </div>
        )
    }
}

export default connect(
    state =>({
        posts: state.posts
    }),
    dispatch =>({
        getPosts: () =>{
            dispatch(getPosts());
        },
        test: (x) =>{
            dispatch(test(x));
        },
        createPost: () =>{
            dispatch(createPost());
        },
        removePost: (id) =>{
            dispatch(removePost(id));
        },
    })
)(Feed);