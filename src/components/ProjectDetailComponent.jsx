import React from 'react'

function ProjectDetailComponent({project, handleDeleteProject}) {
    console.log(project);
    
    return (
        <>
            <div className='mt-8'>
            <div className='flex gap-12'>
                <h1 className='text-xl text-stone-800 font-bold'>{project[0].title}</h1>
                <button className='text-right' onClick={() => handleDeleteProject(project[0].id)}>delete</button>
            </div>                
            <div className='border-b-2'>              
                <p className='text-sm text-stone-600 mb-4'>{project[0].dueDate}</p>                
                <p className='text-stone-600 mb-4'>{project[0].description}</p>
            </div>
            <section>
                <p></p>
            </section>

            </div>
        </>
    )
}

export default ProjectDetailComponent
