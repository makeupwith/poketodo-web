import { AppBar, Stack, styled, Toolbar, Typography, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Main from '../../components/main'
import LoginForm from '../../components/FormContainer'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

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

	const login = () => {
		console.log("login button cliced");
		console.log(email);
		console.log(password);
		//追加
		axios.post("http://35.77.103.51:8080/login",
			{
				email: email,
				password: password,
			},
			{ withCredentials: true }
		).then(response => {
			console.log("login res", response)
			return navigate("/tasks");
		}).catch(error => {
			console.log("login error", error)
		})
	}

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
				<LoginForm>
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
							onClick={() => {
								login();
							}}
						>
							ログイン
						</Button>
						<Typography color="primary" onClick={() => navigate('/register')} sx={{ textAlign: 'right' }}>{'新規登録はこちら'}</Typography>
					</Stack>
				</LoginForm>
			</Main>
		</Root>
	)
}

export default Index