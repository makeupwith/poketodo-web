import React from 'react'

import { atom, useRecoilState } from 'recoil'
import { RecoilAtomKeys } from "api/RecoilKeys"

const userIDAtom = atom({
	key: RecoilAtomKeys.USER_ID,
	default: ''
});

const Tasks = () => {
	const [userID, setUserID] = useRecoilState(userIDAtom);
	console.log(userID);

	// const checkUserID = () => {

	// }

	return (
		<div>{userID}</div>
	)
}

export default Tasks