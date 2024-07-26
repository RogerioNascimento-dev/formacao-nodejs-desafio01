import { Database } from "../storage/database.js";
import { randomUUID } from 'node:crypto';
import { now } from "../utils/utils.js";

export class TasksRepository{

    #db   = null;    

    constructor()
    {
        this.#db = new Database();        
    }
    
    create(payload)
    {
        this.#db.insert('tasks',{
            id: randomUUID(),
            completed_at: null,
            created_at: now(),
            updated_at: null,
            ...payload
        });
    }

    select(search)
    {
        return this.#db.select('tasks', search);
    }

    delete(id)
    {
        return this.#db.delete('tasks', id);        
    }

    update(id, payload)
    {
        return this.#db.update('tasks',id, payload);        
    }

    complete(id)
    {
        return this.#db.complete('tasks', id);        
    }
}