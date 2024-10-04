import { wait } from '@/lib/actions'
import React from 'react'

const X7 = async () => {
  await wait(7000)
  return (
    <div>X7</div>
  )
}

export default X7