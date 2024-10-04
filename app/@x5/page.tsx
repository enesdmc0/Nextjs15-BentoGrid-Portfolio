import { wait } from '@/lib/actions'
import React from 'react'

const X5 = async () => {
  await wait(5000)
  return (
    <div>X5</div>
  )
}

export default X5