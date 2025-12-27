import React, { forwardRef } from 'react'

const Input = forwardRef(function({ label, textArea, ...props }, ref) {
    const classes = 'w-full p-1 rounded-sm border-stone-200 bg-stone-200 text-stone-600 focus:outline-none focus: border-stone-600';
    return (
        <>
            <p className='flex flex-col gap-1 my-4'>
                <label className='text-sm font-bold uppercase text-stone-500'>{ label }</label>
                { textArea ? <textarea ref={ref} className= {classes} {...props}/> : <input className={classes} { ...props } ref={ref} /> }
            </p>
        </>
    )
})

export default Input
