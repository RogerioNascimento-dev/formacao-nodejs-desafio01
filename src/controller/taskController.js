import { TasksRepository } from "../repositories/tasksRepository.js";

const taskRepository = new TasksRepository();

export class TaskController
{
    
    create(req, res){
        taskRepository.create(req.body);
        return res.writeHead(201).end();
    }

    getAll(req, res){
        const { search } = req.query;
        const tasks = taskRepository.select(search ? {title: search, description: search}: null);
        return res.end(JSON.stringify(tasks));
    }

    update(req, res){
        console.log('not implemented yet!', req.query, req.params,req.body);
        return res.end();
    }

    delete(req, res){
        console.log('not implemented yet!', req.query, req.params,req.body);
        return res.end();
    }
    
    complete(req, res){
        console.log('not implemented yet!', req.query, req.params,req.body);
        return res.end();
    }
    
}