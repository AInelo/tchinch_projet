import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <header className=''><Header /></header>
        <main className='flex grow py-4'>{children}</main>    
        <footer className=''><Footer /></footer>
    </div>
  )
}

export default Layout