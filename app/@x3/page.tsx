import { wait } from '@/lib/actions'
import React from 'react'

const X3 = async() => {
  await wait(3000)
  return (
    <div>X3</div>
  )
}

export default X3