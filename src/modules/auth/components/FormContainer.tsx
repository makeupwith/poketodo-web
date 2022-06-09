import React, { ReactNode } from 'react'
import { Paper, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import LogoPng from '../../../assests/logmark_black.png'

type Props = {
	children: ReactNode
}

const Root = styled(Paper)(({ }) => ({
	padding: 24,
	// width: '100%',
	maxWidth: 400,
	minWidth: 280,
	alignItems: 'center',
}))

const LoginForm: React.FC<Props> = ({ children }) => (
	<Stack component={Root} spacing={2}>
		<img alt='poketodo Logo' src={LogoPng} width={200} />
		{children}
	</Stack>
)

export default LoginForm