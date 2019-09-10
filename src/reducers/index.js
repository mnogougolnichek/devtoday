import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import test from "./test";
import posts from "./posts";
import post from "./post";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    test: test,
    posts: posts,
    post: post,
});

export default createRootReducer

