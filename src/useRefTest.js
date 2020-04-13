import React, { useEffect, useRef } from 'react'

const UseRefTest = () => {
  const idReference = useRef()
  const passwordReference = useRef()

  useEffect(() => {
    console.log(idReference)
    console.log(passwordReference)
  }, [])

  return (
    <form>
      <label text='id:' type='text' ref={idReference} />
      <label text='password:' type='password' ref={passwordReference} />
    </form>
  )
}

export default UseRefTest