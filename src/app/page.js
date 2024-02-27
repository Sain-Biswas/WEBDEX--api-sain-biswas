import Image from 'next/image';
import Link from 'next/link';
import pokeapiLogo from './components/pokeapiLogo.png';
import pokemonLogo from './components/pokemonLogo.png';
import { Button } from './resources/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-wrap justify-center items-center gap-2 h-[calc(100vh-4rem)]'>
      <div className='bg-yellow-400 p-2 rounded-2xl w-full max-w-[37rem]'>
        <div className='pb-2 flex-wrap  flex items-center justify-center'>
          <div className='w-[18rem] h-24 object-contain'>
            <Image
              src={pokemonLogo}
              alt='Pokémon'
              width={2000}
              height={736}
              className='w-full h-full'
            />
          </div>
          <div className='w-[18rem] h-60 flex justify-center items-center'>
            <p className='sm:text-2xl text-lg italic font-mono text-center text-white'>Welcome to WébDex. The all in one Online Pokémon.</p>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 gap-1'>
          <Button
            variant='outline'
            size='text'
            className='bg-transparent hover:bg-yellow-300/50'
          >
            <Link href='/pokemon' className='w-full'>
              <p className='text-lg text-white'>Pokémons</p>
            </Link>
          </Button>
          <Button
            variant='outline'
            size='text'
            className='bg-transparent hover:bg-yellow-300/50'
          >
            <Link href='/pokemon/moves' className='w-full'>
              <p className='text-lg text-white'>Moves</p>
            </Link>
          </Button>
          <Button
            variant='outline'
            size='text'
            className='bg-transparent hover:bg-yellow-300/50'
          >
            <Link href='/pokemon/type' className='w-full h-full'>
              <p className='text-lg text-white'>Types</p>
            </Link>
          </Button>
        </div>
        <div className='pt-2 text-white font-mono text-center text-sm sm:text-base'>
          Learn and discover all about the monsters of the PokéWorld.
        </div>
      </div>
      <div className='bg-cyan-600 p-2 rounded-2xl w-full max-w-[37rem]'>
        <div className='flex pb-2 flex-wrap items-center justify-center'>
          <div className='w-[18rem] h-24 flex items-center justify-center'>
            <Image
              src={pokeapiLogo}
              alt='PokéApi'
              width={2000}
              height={736}
              className='w-full h-full'
            />
          </div>
          <div className='w-[18rem] h-60 flex justify-center items-center'>
            <p className='text-lg sm:text-2xl italic font-mono text-center text-white'>Beautifully designed Application Programming Interface &#40;API&#41; to get all information about Pokémons in one place.</p>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 gap-1'>
          <Button
            variant='outline'
            size='text'
            className='bg-transparent hover:bg-yellow-300/50'
          >
            <Link href='/docs/pokemon' className='w-full'>
              <p className='text-lg text-white'>Pokémons</p>
            </Link>
          </Button>
          <Button
            variant='outline'
            size='text'
            className='bg-transparent hover:bg-yellow-300/50'
          >
            <Link href='/docs/moves' className='w-full'>
              <p className='text-lg text-white'>Moves</p>
            </Link>
          </Button>
          <Button
            variant='outline'
            size='text'
            className='bg-transparent hover:bg-yellow-300/50'
          >
            <Link href='/docs/type' className='w-full h-full'>
              <p className='text-lg text-white'>Types</p>
            </Link>
          </Button>
        </div>
        <div className='pt-2 text-white font-mono text-center text-sm sm:text-base'>
          Guide to access the information of all Pokémons at one place.
        </div>
      </div>
    </div>
  )
}
