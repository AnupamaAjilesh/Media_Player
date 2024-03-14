import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-light w-100 d-flex flex-column justify-content-center bg-light'>
        <div className='row p-5'>
          <div className='col'>
            <h4>Media Player 2024</h4>
            <p style={{ textAlign: 'justify' }}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi officiis, doloremque sapiente quibusdam laboriosam assumenda neque
              laudantium dignissimos adipisci corrupti rem aut soluta? Repellat,
              vitae, consectetur beatae illum facilis amet voluptatum, minus omnis
              doloribus mollitia debitis veniam modi. Dicta eligendi ducimus magnam
              aperiam rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur consectetur totam ipsum!            </p>


          </div>
          <div className='col'>
            <h4>Links</h4>
           <Link to={'/'} style={{color:'black'}}>Landing</Link><br />
           <Link to={'dash'} style={{color:'black'}}>Dashboard</Link><br />
           <Link to={'his'} style={{color:'black'}}>History</Link><br />
           
     
          </div>
          <div className='col'>
            <h4>References</h4>
           
            <a href="https://getbootstrap.com/" target='_blank' style={{color:'black'}}>Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{ color:'black'}}>React-Bootstrap</a><br />
            <a href="https://react.dev/" target='_blank' style={{ color:'black'}}>React</a><br />

          </div>
        </div>
        <div className='text-center'>
          <p>&copy;Media Player</p>


        </div>
       


        


      </div>


    </>

  )
}

export default Footer