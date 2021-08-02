import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_DONE, FILTER_NOT_DONE } from "./actions-types"

export const addTask = newPost => {
    return {
        type: ADD_TASK,
        payload: newPost
    }
}

export const deleteTask = newPost => {
    return {
        type: DELETE_TASK,
        payload: newPost
    }
}

export const editTask = newPost => {
    return {
        type: EDIT_TASK,
        payload: newPost
    }
}

// export const FILTER_DONE = 'FILTER_DONE'
// export const FILTER_NOT_DONE = 'FILTER_NOT_DONE'


