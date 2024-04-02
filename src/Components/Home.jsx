import React from 'react'
import CollaborateSvg from '../assets/collaborate-notes.svg';
import Information from './Information';

function Home() {
  return (
    <div className='home-container'>
        <div className='main-heading-container'>
            <div className='heading-container'>
                <div>
                    <h1 className='main-heading'>Capture, &nbsp; Collaborate, &nbsp; Create<span className='color-red'>.</span> &nbsp;</h1>
                    <span className='sub-text'>Acme Notes: Welcome to Acme Note, your digital canvas for capturing, organizing, and collaborating on ideas like never before. With Acme Note, you can seamlessly jot down thoughts, sketch concepts, and brainstorm with your team in real-time.</span>
                </div>
                <div>
                    <button className='signup-home btn btn-primary'>Sign Up</button>
                </div>
            </div>
            <div className='image-container'>
                <img src={CollaborateSvg} height={800} width={700}/>
            </div>

        </div>
        <div className='main-information-container'>
            <div className='information-container'>
                <Information />
            </div>
        </div>
    </div>
  )
}

export default Home