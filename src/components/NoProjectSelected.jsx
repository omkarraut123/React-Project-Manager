import React from 'react';
import noProjectImage from '../assets/no-projects.png'
import Button from './Button';

function NoProjectSelected({handleIntialProject}) {


    return (
        <div className='mt-24 text-center w-2/3'>
            <img src={noProjectImage} alt='An empty task list' className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-500 mb-4'>Select a project or get started with new one</p>
            <p className='mt-8'>
              <Button onClick={handleIntialProject} >
                Create new Project
              </Button>
            </p>
        </div>

    )
}

export default NoProjectSelected
