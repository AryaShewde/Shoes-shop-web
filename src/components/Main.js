import React from 'react'
import shoe from "../assets/shoeimg.png"

const Main = () => {
    const image = "https://media.istockphoto.com/id/1403413180/photo/background-image-with-multiple-soap-bubbles-on-a-white-background-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=XmnDpgcZXaTnJBceiv2CU-fajYI4Mfz1EMosPRqKgaU="
  return (
    <div className='main'>
      <img src={image} alt="" className='mainimg'/>
      <div className='shoediv'>
        <div className='left'>
            <div className='firstline'>Are you ready to</div>
            <div className='secondline'>Lead the way</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ea.</p>
            <button className='btn2'>Order Now</button>
        </div>
        <img src={shoe} alt=""  className='shoeimg'/>
      </div>
    </div>
  )
}

export default Main
