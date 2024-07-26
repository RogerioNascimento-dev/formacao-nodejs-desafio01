import { TaskController } from "./controller/taskController.js";
import { Utils } from "./utils/utils.js";

const taskController = new TaskController();
const util           = new Utils();

export const routes = [
    {
        method: 'POST',
        path: util.buildRoutePath('/tasks'),
        handler: taskController.create
    },
    {
        method: 'GET',
        path: util.buildRoutePath('/tasks'),
        handler: taskController.getAll
    },
    {
        method: 'PUT',
        path: util.buildRoutePath('/tasks/:id'),
        handler: taskController.update
    },
    {
        method: 'DELETE',
        path: util.buildRoutePath('/tasks/:id'),
        handler: taskController.delete
    },
    {
        method: 'PATCH',
        path: util.buildRoutePath('/tasks/:id/complete'),
        handler: taskController.complete
    }    
]