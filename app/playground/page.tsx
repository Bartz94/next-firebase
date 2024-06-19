'use client'
import { auth } from '@/app/lib/firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import LogoutButton from '../components/logoutButton/logoutButton'
import { TiltCard } from './components/tiltedCard'

const Playground = () => {
    const router = useRouter()

    const handleLogout = async () => {
        await signOut(auth).then((() => {
            router.push('/')
        }))
    }

    const navigateToPokemon = () => router.push('/playground/pokemon')

    return (
        <div className="flex justify-center items-center h-screen">
            <TiltCard
                imageSrc="/pokeapi-img.png"
                title="Pokemaon Api"
                description="Search your favorite pokemon and hopefully add them to your team"
                onNavigate={navigateToPokemon}
            />
        </div>
    )
}

export default Playground