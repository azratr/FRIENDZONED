import axios from "axios";

const API = axios.create({baseURL:"https://friendzoned-5xpg.onrender.com"})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')) {
        req.headers.Authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

export const getTimelinePosts = (id)=>API.get(`/posts/${id}/timeline`)
export const likePost = (id,userId)=>API.put(`post/${id}/like`,{userId:userId})