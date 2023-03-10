import React from 'react'
import './social.css'
import { FaLinkedin} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineMedium} from 'react-icons/ai'
const Social = () => {
  return (
    <div className='social_nav'>
    
    <a href="https://www.linkedin.com/in/sidharth-shukla-a7a32320a/"><FaLinkedin/></a>
    <a href="https://github.com/sidharthhhh"><FiGithub/></a>
    <a href="https://twitter.com/Sidhart64113485"><IoLogoTwitter/></a>
    <a href="https://medium.com/@swayam1044"><AiOutlineMedium/></a>
    </div>
   

  )
}

export default Social
