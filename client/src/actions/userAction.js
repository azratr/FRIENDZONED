import API from "../api/UserRequest";

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATING_START" });
  try {
    const { data } = await API.updateUser(id, formData);
    dispatch({ type: "UPDATING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPDATING_FAIL" });
  }
};


export const followUser = (id, data)=>async(dispatch) => {
    dispatch({type: "FOLLOW_USER",data:id})
   API.followUser(id, data)
}

export const unFollowUser = (id,data)=>async(dispatch)=>{
    dispatch({type: "UNFOLLOW_USER",data:id})
    API.unFollowUser(id,data)
}