import React, { ReactNode } from 'react'
import Header from './Header'

type Props = {
    children: ReactNode
}
const Layout = (props:Props) => {
  return (
    <>
        <Header />
        {props.children}
    </>
  )
}

export default Layout