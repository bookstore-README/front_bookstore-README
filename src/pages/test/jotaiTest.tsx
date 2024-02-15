import { basketItemList } from '@/store/state'
import { useAtomValue } from 'jotai'
import React from 'react'

function JotaiTest() {   
  const test = useAtomValue(basketItemList)
    
  console.log("test", test)
  return (
    <div>
      
    </div>
  )
}

export default JotaiTest
