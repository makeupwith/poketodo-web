import { AppBar, Stack, styled, Toolbar, Typography, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Main from '../../components/main'
import FormContainer from '../../components/FormContainer'
import { useNavigate } from "react-router-dom"
// import client from "../../../../api/client"
import useLoginState from "utils/useLoginState"
import { useForm } from 'react-hook-form'

import { atom, useRecoilState } from 'recoil'
import { RecoilAtomKeys } from "api/RecoilKeys"

const userIDAtom = atom({
	key: RecoilAtomKeys.USER_ID,
	default: ''
});

const Root = styled(Stack)({
	height: '100vh',
	width: '100vw',
	position: 'relative',
	overflow: 'auto'
})

const Index = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { login } = useLoginState();
	const { handleSubmit } = useForm();
	const [userID, setUserID] = useRecoilState(userIDAtom);

	// const login = () => {
	// 	client.post("/login",
	// 		{
	// 			email: email,
	// 			password: password,
	// 		},
	// 		{ withCredentials: true }
	// 	).then(response => {
	// 		console.log("login res", response)
	// 		return navigate("/tasks");
	// 	}).catch(error => {
	// 		console.log("login error", error)
	// 	})
	// }

	const onSubmit = handleSubmit(async () => {
		try {
			await login(email, password);
			console.log(userID);
			return navigate("/tasks");
		} catch (error) {
			console.log("login error", error)
		}
	})

	return (
		<Root>
			<AppBar color='primary' position='relative' sx={{ flexDirection: 'initial' }}>
				<Toolbar>
					<Typography noWrap component='div' variant='h6'>
						POKE-TODO
					</Typography>
				</Toolbar>
			</AppBar>
			<Main>
				<FormContainer>
					<Stack spacing={2}>
						<TextField
							autoFocus
							fullWidth
							autoComplete='email'
							defaultValue=''
							id='email'
							label='メールアドレス'
							margin='normal'
							name='email'
							type='email'
							onChange={event => setEmail(event.target.value)}
						/>
						<TextField
							fullWidth
							autoComplete='current-password'
							defaultValue=''
							id='password'
							label='パスワード'
							margin='normal'
							name='password'
							type='password'
							onChange={event => setPassword(event.target.value)}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							onClick={onSubmit}
						>
							ログイン
						</Button>
						<Typography color="primary" onClick={() => navigate('/register')} sx={{ textAlign: 'right' }}>{'新規登録はこちら'}</Typography>
					</Stack>
				</FormContainer>
			</Main>
		</Root>
	)
}

export default Index