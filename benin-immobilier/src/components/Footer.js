import React from 'react'
import FooterSection from './FooterSection'
import NewsLetter from './NewsLetter'

const Footer = () => {
  return (
    <div className='bg-primary flex flex-row bottom-0 h-[350px] w-full font-serif'>
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row '>
                <div className='flex flex-row w-3/5  justify-around'>
                    <FooterSection title="Solution">
                        <div className='footerTextStyle'>Marketing</div>
                        <div className='footerTextStyle'>Analytics</div>
                        <div className='footerTextStyle'>Commerce</div>
                        <div className='footerTextStyle'>Insights</div>
                    </FooterSection>

                    <FooterSection title="Solution">
                        <div className='footerTextStyle'>Marketing</div>
                        <div className='footerTextStyle'>Analytics</div>
                        <div className='footerTextStyle'>Commerce</div>
                        
                    </FooterSection>

                    <FooterSection title="Solution">
                        <div className='footerTextStyle'>Marketing</div>
                        <div className='footerTextStyle'>Analytics</div>
                        <div className='footerTextStyle'>Commerce</div>
                        <div className='footerTextStyle'>Insights</div>
                        <div className='footerTextStyle'>Insights</div>
                    </FooterSection>

                    <FooterSection title="Solution">
                        <div className='footerTextStyle'>Marketing</div>
                        <div className='footerTextStyle'>Analytics</div>
                        <div className='footerTextStyle'>Commerce</div>
                        <div className='footerTextStyle'>Insights</div>
                    </FooterSection>
                    
                </div>
                <NewsLetter />
            </div>

            <div className='border w-[84em] mt-[8em] border-gray-700 mx-[5em]'></div>

            <div className='footerTextStyle text-center'>© 2020 Your Company, Inc. All rights reserved.</div>
        </div>
        
        
        
        
    </div>
  )
}

export default Footer