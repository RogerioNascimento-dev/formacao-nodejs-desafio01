import { Database } from "../storage/database.js";
import { randomUUID } from 'node:crypto';
import { Utils } from "../utils/utils.js";

export class TasksRepository{

    #db   = null;
    #util = null;

    constructor(){
        this.#db = new Database();
        this.#util = new Utils();
    }
    
    create(payload)
    {
        this.#db.insert('tasks',{
            id: randomUUID(),
            completed_at: null,
            created_at: this.#util.now(),
            updated_at: null,
            ...payload
        });
    }

    select(search){
        return this.#db.select('tasks', search);
    }
}