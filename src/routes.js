import { TaskController } from "./controller/taskController.js";
import { buildRoutePath } from "./utils/utils.js";

const taskController = new TaskController();

export const routes = [
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: taskController.create
    },
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: taskController.getAll
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: taskController.update
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: taskController.delete
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: taskController.complete
    }    
]