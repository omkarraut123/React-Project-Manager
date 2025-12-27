import Input from './Input'
import React, { useRef } from 'react'
import Modal from './Modal';

function fnValidate(title,description,dueDate){
    if(title === undefined || title === ""){
        return false;
    }else  if(description === undefined || description === ""){
        return false;
    }else if(dueDate === undefined || dueDate === ""){
        return false;
    }
    return true
}

function NewProject({fnSaveData, onCancel}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSaveData(){
        const titleVal = title.current.value;
        const descriptionVal = description.current.value;
        const dueDateVal = dueDate.current.value;
        if(fnValidate(titleVal,descriptionVal,dueDateVal)){
        fnSaveData({title: titleVal, description: descriptionVal, dueDate: dueDateVal})
        title.current.value = "";
        description.current.value = ""
        dueDate.current.value = "";
    }else{

        modal.current.open();
   
        }
        
    }

    return (
        <>
       <Modal ref={modal}>
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Inputs!</h2>
            <p  className="text-stone-800 my-4">Please enter all fields!</p>
       </Modal>
       <div className='w-[35rem] mt-16'>
         <main className='flex items-center justify-end gap-4 my-4'>
            <li className='list-none'>
                <button className='text-stone-800 hover: text-stone-950' onClick={onCancel}>Cancel</button>
            </li>
             <li className='list-none'>
                <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSaveData}>Save</button>
            </li>
        </main>
        <div>
           <Input type="text" label="Title" ref={title}/>
           <Input type="text" label="Description" ref={description} textArea/>
           <Input type="date" label="Due Date" ref={dueDate} />
        </div>
       </div>
        </>
    )
}

export default NewProject
