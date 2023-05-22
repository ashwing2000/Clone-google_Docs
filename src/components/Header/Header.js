import React from 'react'
import { Button } from '@material-tailwind/react'
import './header.css'

import { Avatar } from "@material-tailwind/react";
import TextEditor from '../textEditor/TextEditor';
import logo from '../../assets/images.png'
function Header() {
    return (
        <div>
            <nav className='flex justify-between items-center p-3 pb-1'>


                <img src={logo} alt="logo google-docs-logo" className='h-8' />
                <div className='flex-grow px-2 '>
                    <h1 className=''>Untitled Document</h1>
                    <div className=' hidden sm:inline-flex flex items-center text-sm space-x-2 -ml-1 h-8 text-black' >
                        <p className='option'>File</p>
                        <p className='option'>Edit</p>
                        <p className='option'>View</p>
                        <p className='option'>Insert</p>
                        <p className='option'>Format</p>
                        <p className='option'>Tools</p>
                        <p className='option'>Extensions</p>
                        <p className='option'>Help</p>
                    </div>
                </div>

                <i class="fa fa-commenting-o pr-4" aria-hidden="true"></i>
                <i class="fa fa-video-camera pr-4" aria-hidden="true"></i>
                <Button className='hidden md:inline-flex
                share-btn'>
                    <i class="fa fa-lock " aria-hidden="true"></i>Share
                </Button>

                <Avatar
                    className='h-10 w-10 ml-2'
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    alt="profile picture"
                />

            </nav>
            <TextEditor />
        </div>
    )
}

export default Header;
