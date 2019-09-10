// import React, {Component} from "react";
import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {getPost} from "../../actions/getPost";
import _ from "lodash";

const Post = (props) => {
    const {getPost, id, post} = props;
    
    useEffect(()=>{
        //getPost(id)
        console.log(post,"post")
        });
    return(
        <div>
            <div>POOOOOST</div>
            <h1>fdfbfb</h1>
            <p>dfbfbddbf</p>
        </div>
    )
};

// class Post extends Component{
//
//     componentDidMount() {
//         const {getPost, id} = this.props;
//         getPost(id);
//         console.log(id, "id");
//     }
//
//     render() {
//         const {post} = this.props;
//         return(
//             <div>
//                 <div>POOOOOST</div>
//                 <h1>{_.isString(post.title) && post.title}</h1>
//                 <p>{_.isString(post.body) && post.body}</p>
//             </div>
//         )
//     }
// }

export default connect(
    state =>({
        id: _.get(state,"router.location.state.id",""),
        post: state.post
    }),
    dispatch =>({
        getPost: (id) =>{
            dispatch(getPost(id));
        }
    })
)(Post);