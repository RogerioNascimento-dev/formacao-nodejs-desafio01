import { TasksRepository } from "../repositories/tasksRepository.js";

const taskRepository = new TasksRepository();

export class TaskController
{
    
    create(req, res)
    {
        const {title, description} = req.body;

        if(title && description){
            taskRepository.create({title, description});
            return res.writeHead(201).end();
        }
        return res.writeHead(422).end('Title and description is required!');
            
    }

    getAll(req, res)
    {
        const { search } = req.query;
        const tasks = taskRepository.select(search ? {title: search, description: search}: null);
        return res.end(JSON.stringify(tasks));
    }

    update(req, res)
    {        
        
        const {title, description} = req.body;
        const {id}                 = req.params;
        
        const result = taskRepository.update(id, {title, description});

        if(result)
            return res.writeHead(204).end();

        return res.writeHead(404).end('Resource not found');
    }

    delete(req, res)
    {
        const {id} = req.params;
        const result = taskRepository.delete(id);

        if(result)
            return res.writeHead(204).end();

        return res.writeHead(404).end('Resource not found!');
    }
    
    complete(req, res)
    {
        const {id} = req.params;
        const result = taskRepository.complete(id);
        if(result)
            return res.writeHead(204).end();

        return res.writeHead(404).end('Resource not found');
    }
    
}