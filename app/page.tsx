
import { Button, Link, Text } from '@chakra-ui/react';
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={lato.className}>

      <section className='flex flex-col justify-center items-center h-[90vh] gap-10'>
        <Text fontSize='6xl' className="text-center">
          The NextJS Playground by Bartz
        </Text>


        <Link href='/login'>
          <Button colorScheme='purple' variant='solid'>Click to start</Button>
        </Link>
      </section>


    </main>
  );
}
