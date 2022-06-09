import React from 'react'
import type { NavigateProps } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// https://github.com/remix-run/react-router/issues/8733
// 環境によって無限ループが発生する不具合があるため、修正されるまではこのコードを使用する
export const Navigate: React.FC<NavigateProps> = ({ to, replace, state }) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate(to, { replace, state })
  }, [navigate, to, replace, state])

  return null
}

export { NavigateProps }