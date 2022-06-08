import { AppBar, Stack, styled, Toolbar, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import Main from '../../components/main'
import LoginForm from '../../components/FormContainer'

const Root = styled(Stack)({
	height: '100vh',
	width: '100vw',
	position: 'relative',
	overflow: 'auto'
})

const index = () => {
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
					<Stack>
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
						/>
						<Button>
							ログイン
						</Button>
					</Stack>
				</LoginForm>
			</Main>
		</Root>
	)
}

export default index