import React from 'react'

import {motion} from 'framer-motion'
import {styles} from '../style'
import {ComputersCanvas} from '../components/canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-auto-7xl flex-row items-start gap-5`}>

        <div className='flex justify-center items-center mt-5'>
          <div className='w-1 sm:80 h-40 violet-gradient'/> 
          <div className='ml-6 mb-28 flex flex-col'>
            <h1 className={`${styles.heroHeadText} text-white`} >Hello, I am <span className='text-[#915eff]'>Matheus</span></h1>
            <p className={`${styles.heroSubText}`}>And I am a Full Stack Software Engineer</p>
          </div>
        </div>
        <ComputersCanvas/>
      </div>

      
     
    </section>
  )
}

export default Hero