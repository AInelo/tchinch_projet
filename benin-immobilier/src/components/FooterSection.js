import React from 'react'

const FooterSection = ({title , children}) => {
  return (
    <div className='relative top-10'>
      <div className='text-white text-footerLinkSize font-bold mb-4'>{title}</div>
      <div className=''>{children}</div>
    </div>
  )
}

export default FooterSection