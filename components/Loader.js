import React from 'react'
import { Wave } from 'better-react-spinkit'
function Loader() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <Wave color={'white'} size={25} />
    </div>
  )
}

export default Loader
