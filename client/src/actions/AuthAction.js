import * as AuthApi from 'api/AuthRequest';
export const logIn = (formData, navigate) => async (dispatch) => {
  dispatch({ type: 'AUTH_START' });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: 'AUTH_SUCCESS', data: data });
    navigate('../home', { replace: true });
  } catch (error) {
    dispatch({ type: 'AUTH_FAIL' });
    navigate('../home', { replace: true });
  }
};
export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: 'AUTH_START' });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: 'AUTH_SUCCESS', data: data });
  } catch (error) {
    dispatch({ type: 'AUTH_FAIL' });
  }
};
