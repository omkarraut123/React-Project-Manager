import React from 'react'
import Button from './Button'

function ProjectSidebar({handleIntialProject, projects, handleSelectProject}) {
    return (
        <>
        <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md: text-xl text-stone-200'>Your Projects</h2>
         <div>
          <Button onClick={handleIntialProject}>
                + Add Project
         </Button>

        </div>
        <div>
            <ul className='mt-8'>
                {
                    projects && projects.map((item) => {
                        return (
                            <li key={item.id}>
                                <button className='w-full text-left px-2 py-1 my-1 rounded-sm bg-stone-600 text-stone-200 hover:bg-stone-500' onClick = { () => handleSelectProject(item.id) }>
                                    {item.title}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </aside>
        </>
        
    );
}

export default ProjectSidebar
