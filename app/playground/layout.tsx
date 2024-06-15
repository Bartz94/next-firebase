'use client'
import React from 'react'
import Login from '../components/login/login';
import useAuth from '../lib/firebase/useAuth';

const PlaygroundLayout = ({ children }:
    { children: React.ReactElement }) => {

    const isAuthenticated = useAuth();
    return isAuthenticated ? (<div>{children}</div>)
        : <Login />
}

export default PlaygroundLayout