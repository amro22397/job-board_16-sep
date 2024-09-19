'use client'

import React from 'react'

const DeletionButton = ({onClick} : {onClick: any}) => {
  return (
    <button onClick={onClick}
                className="text-red-600">Delete</button>
    
  )
}

export default DeletionButton
