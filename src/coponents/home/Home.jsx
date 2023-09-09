import React from 'react'
import './home.css'
import Presentacion from '../presentacion/Presentacion'
import Conocenos from '../conocenos/Conocenos'

function Home() {
  return (
    <>
    <div className='contenedor-home'>
    <Presentacion />
    </div>
    <div className='contenedeor-conocenos'>
    <Conocenos/>
    </div>
    
    </>
    
  )
}

export default Home