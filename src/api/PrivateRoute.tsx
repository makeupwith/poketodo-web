import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { atom, useRecoilValue } from 'recoil';
import { RecoilAtomKeys } from "./RecoilKeys"

const loginState = atom({
	key: RecoilAtomKeys.LOGIN_STATE,
	default: sessionStorage.getItem('loggedIn') === 'true' || false
})

const PrivateRoute = () => {
	const loggedIn = useRecoilValue(loginState);
	console.log(loggedIn);
	return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute 