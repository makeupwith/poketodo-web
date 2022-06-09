import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tasks from './tasks/pages'
import Register from './auth/pages/register'
import Login from './auth/pages/login'
import PrivateRoute from '../api/PrivateRoute';
import NotFound from '../NotFound';
import { Navigate } from 'utils/Navigate';

import { atom, useRecoilValue } from 'recoil';
import { RecoilAtomKeys } from "api/RecoilKeys"

const loginState = atom({
	key: RecoilAtomKeys.LOGIN_STATE,
	default: sessionStorage.getItem('loggedIn') === 'true' || false
})

const App = () => {
	const loggedIn = useRecoilValue(loginState);
	return (
		<BrowserRouter>
			<Routes>
				<Route path={`/login`} element={loggedIn
					? (<Navigate to="/tasks" />)
					: (<Login />)} />
				<Route path={`/register/`} element={loggedIn
					? (<Navigate to="/tasks" />)
					: (<Login />)}  />
				<Route path={`/`} element={<PrivateRoute />}>
					<Route path='/tasks' element={<Tasks />} />
				</Route>
				{/* <Route path={`/tasks/`} element={<Tasks />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
