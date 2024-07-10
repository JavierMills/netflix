import React, { useEffect, useState } from 'react'
import './Nav.css'
export const Nav = () => {
  const [ show, handleShow] = useState(false);

  useEffect(() => {
   
    window.addEventListener("scroll" , () =>{
      if (window.scrollY > 100){
        handleShow(true);
      }else handleShow(false);
    });
    return () => {
      window.addEventListener("scroll")
    };
  }, []);


  return (
    <div className={`nav ${ show && "nav_black"}`}>



      <img 
        className='nav_logo'
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        alt='Netflix_logo'
      />
       <img 
        className='nav_avatar'
        src='https://www.seekpng.com/png/detail/899-8992514_evil-user-silhouette-person-profile-devil-avatar-devil.png'
        alt='Netflix_logo'
      />
    </div>
  )
}
