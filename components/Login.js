import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis()

  return (
    <div className=" bg-black ">
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
          className="rounded-full object-cover"
        />
        <button
          className="animate-pulse rounded-lg bg-yellow-500 p-5 font-bold"
          onClick={() => authenticate()}
        >
          Login to MetaVerse
        </button>
      </div>
      <div className="relative h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
