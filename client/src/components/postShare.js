import React , {useState,useRef} from 'react'
import '../styles/styles.css'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../actions/uploadAction'

const PostShare = () => {
   const loading = useSelector((state)=>state.postReducer.uploading)
   const [image,setImage] = useState(null)
   const imageRef = useRef()
   const dispatch = useDispatch()
   const desc = useRef()
   const {user}= useSelector((state)=>state.AuthReducer.authData)
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
   
     
    const onImageChange= (event)=>{
       if(event.target.files && event.target.files[0]){
        let img = event.target.files[0];
        setImage (img);
       }
    }

    
    const handleSubmit = (e)=>{
        e.preventDefault();

        const newPost = {
            userId:user._id,
            desc: desc.current.value
        }
        if(image){
            const data= new FormData()
            const filename = Date.now() + image.name;
            data.append("name",filename)
            data.append("file",image)
            newPost.image = filename;
            console.log(newPost)
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }
    const reset = ()=>{
        setImage(null);
        desc.current.value =""
     }
    return(
        <>
        <div className='postShare'>
            <img src={ user.profilePicture? serverPublic + user.profilePicture: serverPublic +"defaultProfile.jpg"} alt='pic'/>
            <div>
                <input 
                ref={desc}
                required
                type='text' placeholder='What is on your mind?'/>
            <div className='post-options'>
                <div className='option'
                style={{color:"purple"}}  
                onClick={()=>imageRef.current.click()}>
                    <UilScenery/>
                    Photo
                </div>
                <div className='option' 
                style={{color:'green'}}>
                    <UilPlayCircle/>
                    Video
                </div>
                <div className='option' 
                style={{color:'blue'}}>
                    <UilLocationPoint/>
                    Location
                </div>
                <div className='option' 
                style={{color:'red'}}>
                    <UilSchedule/>
                    Schedule
                </div>
                <button className='share-btn' onClick={handleSubmit}>{loading?"Uploading...":"Share"}</button>
                 <div style={{display:'none'}}>
                    <input type='file' name='myImage' ref={imageRef} onChange={onImageChange}/>
                 </div>
               </div>
              {image &&(
                <div className='previewImage'>
                   <UilTimes onClick={()=>setImage(null)}/>
                   <img src={URL.createObjectURL(image)} alt=''/>
                </div>
              )
              }


            </div>
        </div>
        </>
    )
}
export default PostShare