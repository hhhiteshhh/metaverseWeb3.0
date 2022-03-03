import Head from 'next/head'
import Login from '../components/Login'
import Loader from '../components/Loader'
import { useMoralis } from 'react-moralis'

const Home = () => {
  const { isAuthenticated, isInitializing, logout } = useMoralis()
  if (!isAuthenticated) {
    return <Login />
  }
  if (isInitializing) {
    return <Loader />
  }
  return (
    <div className="h-screen">
      <Head>
        <title>Web 3.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>I'm dashboard</h1>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home
