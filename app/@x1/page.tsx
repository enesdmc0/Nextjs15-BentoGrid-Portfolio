import { wait } from '@/lib/actions'
import React from 'react'

const X1 = async() => {
  await wait(1000)
  return (
    <div>X1</div>
  )
}

export default X1