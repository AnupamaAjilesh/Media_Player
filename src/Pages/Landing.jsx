import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
  <>
  <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
    <div className='row p-5 shadow'>
      <div className='col d-flex flex-column justify-content-center'>
        <h1>Media Player 2024</h1>
        <p>Explore media player for utube video upload and management,you can add and manage videos,categories and even check </p>
        <div>
        <Link to={'/dash'} className='btn btn-success'>Explore</Link>
        </div>
      </div>
      <div className='col'>
        <img src="https://cdn.pixabay.com/photo/2019/04/20/04/51/social-media-4140959_640.jpg"  className='img-fluid shadow' alt="img" />

      </div>

    </div>
  </div>
  <div className='mt-3 p-5'>
    <h2 className='text-center'>Features</h2>
    <div className='d-flex mt-2 flex-row justify-content-between'>
    
    <div class="card" style={{width: '18rem'}}>
  <img src="https://images.squarespace-cdn.com/content/v1/5bff4a2a75f9eec627d36396/1594578696859-X60SYJGSG86XHAVBT4I9/tenor-2.gif"style={{height:'300px'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Upload Videos</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: '18rem'}}>
  <img src="https://cdn.dribbble.com/users/1044993/screenshots/4647139/media/3aeb01af114ff757dee01edd95db7865.gif" style={{height:'300px'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Watch Videos</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: '18rem'}}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Watch History</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

    </div>

  </div>
  <div className='mt-5  d-flex justify-content-between flex-row align-items-center  p-5'>
    <div className='col'>
      <h2>Simple, Fast & Secured</h2>
      <p style={{textAlign:"justify"}}>Media player 2024 is a platform for simple and faster youtube video uploading and management
       video watch history too where you get a simple video player interface with the app itself...</p>


    </div>
    <div className='col'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/OGwyhjk_fhE?si=w2B53pAuoZsI8K5r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>


  </div>
  </>
  )
}

export default Landing