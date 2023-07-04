import API from "../api/UploadRequest";
export const uploadImage = (data) => async (dispatch) => {
  try {
    await API.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data)=>async(dispatch)=>{
    dispatch({type:"UPLOAD_START"})
    try {
        const newPost = await API.uploadPost(data)
        dispatch({type : "UPLOAD_SUCCESS",data:newPost.data})
    } catch (error) {
        console.log(error)
        dispatch({type: "UPLOAD_FAIL"})
    }
}