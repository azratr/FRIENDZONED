import API from "../api/AuthRequest";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" })
  try {
    const { data } = await API.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" })
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await API.signUp(formData)
    dispatch({ type: "AUTH_SUCCESS", data: data })
    

  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" })
  }
};

export const logOut = () => async(dispatch)=>{
   dispatch({type: "LOG_OUT"})
}