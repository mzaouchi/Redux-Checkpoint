import { useState } from "react";
import { editFilter } from "./actions";
import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from "./actions-types";
import Task from "./Task";

const initialState = {
    tasks: [
        {
            id: 1,
            description: 'Provide access to the affected server or database dump. If it is possible and when it does not violate security policies, it is usually helpful for the developer to access the original data that might have played a role in the problem.',
            isDone: false
        },
        {
            id: 2,
            description: 'Make a screencast. It is not always necessary, but many times a short screencast (or at least a screenshot) says more than a thousand words. While working on MacOS you can use QuickTime Player for the purpose but there are plenty of tools available for other operating systems as well.',
            isDone: true
        },
        {
            id: 3,
            description: 'Provide contact information of the person that reported the bug. This will not always be possible, but in some cases it might be advantageous and most effective if a developer can have a chat with a person that actually experienced the bug, especially if the steps to reproduce a problem are not deterministic.',
            isDone: false
        },
        {
            id: 4,
            description: 'Spoil your developers with details. It is always safer to assume less rather than more domain knowledge in the dev team. Therefore following the KISS principle and augmenting each description or acceptance criteria list with contextual/domain knowledge and details that might become relevant is highly recommended.',
            isDone: false
        }
      
    ]
}

const rootReducer = (state = initialState, action) => {
   
    
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return {
                tasks : state.tasks.filter(task => task.id !== action.payload.id)
            }
        case EDIT_TASK:
            return {
                tasks : state.tasks.map(task => task.id === action.payload.id ? {...task,id : action.payload.id, description : action.payload.description,isDone : action.payload.isDone} : task)
            }
        // case FILTER_DONE:
            
        //     return{
                
        //         tasks : state.tasks.filter(task=>task.isDone === true).map(task=><Task task = {task}></Task>)
        //     }
        // case FILTER_NOT_DONE:
        //         return{
                
        //         tasks : state.tasks.filter(task=>task.isDone === false).map(task=><Task task = {task}></Task>)
        //         }
                      
                  
        default:
            return state
    }
}

export default rootReducer;