import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { selectUser, login, logout } from "../features/userSlice"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tasks from './tasks/pages'
import Register from './auth/pages/register'
import Login from './auth/pages/login'

const App = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	// App component など、どのページを開いても必ず読み込まれるcomponent に現在ログイン中のuserをfetchするeffectを書く
	useEffect(() => {
		if ( /*path.to.curerentUser === undefined*/ true) {
			// ログイン中のユーザーの情報をfetch する処理
			// getMe();
			dispatch(
				// *ISSUE：axiosによるrequestで返却された値を下記に入れたい
				login({
					userId: "",
					displayName: ""
				})
			);
			// *ISSUE：クリーンアップ関数?は必要？
		}
		// ログイン中のユーザーの情報を格納するstateをdepsに入れておく
		// それにより最初のマウント?時とstateに変化があった場合に呼び出される
		// deps：依存配列のことで、useMemoやuseEffectの第二引数のことを指す
		// 基本的に、useEffectの第２引数を空にすることはない
	}, [ /*path.to.curerentUser*/]);

	// *ISSUE：ログアウト時にStore/Slice(login)のstateを解放する処理をどこに書いたら良いのか？？

	return (
		<BrowserRouter>
			<Routes>
				<Route path={`/login`} element={<Login />} />
				<Route path={`/register/`} element={<Register />} />
				<Route path={`/tasks/`} element={<Tasks />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
