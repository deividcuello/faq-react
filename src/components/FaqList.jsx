import React from 'react'

function FaqList( {children} ) {
  return (
    <ul className='faqlist'>
        {children}
    </ul>
  )
}

export default FaqList