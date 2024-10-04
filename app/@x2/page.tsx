import { wait } from '@/lib/actions'
import React from 'react'

const X2 = async () => {
  await wait(2000)
  return (
    <div>X2</div>
  )
}

export default X2