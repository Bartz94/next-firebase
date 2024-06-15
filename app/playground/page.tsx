'use client'
import { auth } from '@/app/lib/firebase/firebaseConfig';
import { signOut } from 'firebase/auth'
import React from 'react'
import { useRouter } from 'next/navigation';
import LogoutButton from '../components/logoutButton/logoutButton';

const Playground = ({ children }:
    { children: React.ReactElement }) => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut(auth);
        router.push('/');
    }

    return (
        <>
            <p>Hello</p>
            <LogoutButton onLogout={handleSignOut} />
        </>
    )
}

export default Playground