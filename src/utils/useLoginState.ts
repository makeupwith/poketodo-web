import { atom, useRecoilState } from 'recoil'
import { RecoilAtomKeys } from "../api/RecoilKeys"
import client from "api/client"

const userIDAtom = atom({
  key: RecoilAtomKeys.USER_ID,
  default: ''
});

const displayNameAtom = atom({
  key: RecoilAtomKeys.DISPLAY_NAME,
  default: ''
});

const loginState = atom({
  key: RecoilAtomKeys.LOGIN_STATE,
  default: sessionStorage.getItem('loggedIn') === 'true' || false
})

const useLoginState = () => {
  const [ loggedIn, setLoggedIn] = useRecoilState(loginState);
	const [ displayName , setDisplayName ] = useRecoilState(displayNameAtom);
	const [ userID, setUserID ] = useRecoilState(userIDAtom);

  const login = async (email: string, password: string) => {
		client.post("/login",
			{
				email: email,
				password: password,
			},
			{ withCredentials: true }
		).then(response => {
			console.log(userID);
			setUserID(response.data.user_id);
			setDisplayName(response.data.display_name);
			console.log(`sucess setUserID ${userID}`)
			setLoggedIn(true);
    	sessionStorage.setItem('loggedIn', 'true');
			return response
		}).catch(error => {
			setLoggedIn(false)
    	sessionStorage.removeItem('loggedIn')
			return error
		})
  }

	const signup = async (display_name: string, email: string, password: string, password_confirmation: string) => {
		setLoggedIn(true);
		sessionStorage.setItem('loggedIn', 'true');
	}

  const logout = () => {
    setLoggedIn(false)
    sessionStorage.removeItem('loggedIn')
  }

  return {
    logout,
    login,
		signup,
    loggedIn
  }
}

export default useLoginState