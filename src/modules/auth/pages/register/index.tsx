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
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const navigate = useNavigate();

	const signup = () => {
		console.log("sign button cliced");
		console.log(displayName);
		console.log(email);
		console.log(password);
		console.log(passwordConfirmation);
		//追加
		axios.post("http://35.77.103.51:8080/signup",
			{
				user: {
					display_name: displayName,
					email: email,
					password: password,
					password_confirmation: passwordConfirmation
				}
			},
			{ withCredentials: true }
		).then(response => {
			console.log("registration res", response)
			return navigate("/login");
		}).catch(error => {
			console.log("registration error", error)
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
							autoComplete='display-name'
							defaultValue=''
							id='display-name'
							label='表示名'
							margin='normal'
							name='display-name'
							type='text'
							// value='mikane'
							onChange={event => setDisplayName(event.target.value)}
						/>
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
							// value='hogehoge@example.com'
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
							// value='hogehoge1120'
							onChange={event => setPassword(event.target.value)}
						/>
						<TextField
							fullWidth
							autoComplete='current-password'
							defaultValue=''
							id='password-confirmation'
							label='確認用パスワード'
							margin='normal'
							name='password-confirmation'
							type='password'
							// value='hogehoge1120'
							onChange={event => setPasswordConfirmation(event.target.value)}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							onClick={() => {
								signup();
							}}
						>
							登録
						</Button>
						<Typography color="primary" onClick={() => navigate('/login')} sx={{ textAlign: 'right' }}>{'ログインはこちら'}</Typography>
					</Stack>
				</LoginForm>
			</Main>
		</Root>
	)
}

export default Index