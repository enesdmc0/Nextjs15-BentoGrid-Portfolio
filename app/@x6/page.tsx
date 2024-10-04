import { wait } from '@/lib/actions'
import React from 'react'

const X6 = async () => {
  await wait(6000)
  return (
    <div>X6</div>
  )
}

export default X6