import React from 'react'

const NewsLetter = () => {
  return (
    <div className='relative top-10 left-20'>
        <div className='font-bold text-white mb-2 text-footerLinkSize'>Subscribe to our newsletter</div>
        <div className='text-slate-400 mb-7 text-footerTitleSize'>The latest news, articles, and resources, sent to your inbox weekly.</div>
        <div className='w-[350px] flex justify-between'>
            <input className='h-10 w-60 border rounded-md bg-primary bg-opacity-50 opacity-50 placeholder:text-white placeholder:opacity-50 focus:outline-none focus:border-sky-500'  type='mail' placeholder="Entrez votre email"/>
            <button className='bg-cyan-500 shadow-lg shadow-cyan-500/50 border border-primary rounded-lg px-3 py-2 text-white hover:bg-cyan-400'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter