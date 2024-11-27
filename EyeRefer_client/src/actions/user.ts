import { useDispatch } from "react-redux";
import { signupInterface } from "../interfaces/iconButtonInterface";

// export const userLogin = (data: any, callback: any) => {
//     return (dispatch: any) => {
//         dispatch(handleLoading(true));
//         ApiClient.post(`${apiUrl}${PORT}${version}/admin/login`, data).then(
//             (response: any) => {
//                 if (response.status === 200 || response.status === 201) {
//                     openNotificationWithIcon('success', response.message);
//                     dispatch(loginSuccess(response));
//                     setAccessToken(response?.token);
//                     if (response?.token) {
//                         setAuthorizationToken(axios, response?.token);
//                         sessionStorage.setItem('token', response?.token)
//                     }
//                     dispatch(handleLoading(false));
//                     return callback(response);
//                 } else if (response.status === 404) {
//                     openNotificationWithIcon('error', response.message);
//                     dispatch(handleLoading(false));
//                     // return callback(response);
//                 } else {
//                     openNotificationWithIcon('error', response.message);
//                     dispatch(handleLoading(false));
//                 }
//             }
//         );
//     };
// };
 

//custom hooks for signUp
export const useSingUp = () =>{
    const dispatch = useDispatchispatch();
}