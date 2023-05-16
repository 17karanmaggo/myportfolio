import React from 'react';
// import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
// import {FiDribbble} from 'react-icons/fi';
 
const headerSocials = () => {
  return (
    <div className='header__socials'>
        {/* <a href="https://www.facebook.com/profile.php?id=100086979909395" target="_blank" rel="noreferrer"><FaFacebookF /></a> */}
        <a href="https://instagram.com/itskaran_143_?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/karan-maggo-13b24716b/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/17karanmaggo" target="_blank" rel="noreferrer"><FaGithub/></a>
        {/* <a href="https://dribbble.com/bhanotabhishek" target="_blank" rel="noreferrer"><FiDribbble /></a> */}
    </div>
  )
}

export default headerSocials;