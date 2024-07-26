import fs from 'node:fs/promises';
import { now } from '../utils/utils.js';


const databasePath = new URL('../../db.json', import.meta.url);

export class Database{

    #database = {};

    constructor()
    {
        fs.readFile(databasePath, 'utf-8').then(data =>{
            this.#database = JSON.parse(data);
        }).catch(() =>{
            this.#persist();
        })
    }

    #persist(){
        fs.writeFile(databasePath, JSON.stringify(this.#database));
    }

    insert(table, data)
    {        
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data);
        }else{
            this.#database[table] = [data];
        }

        this.#persist();
        return data;
    }

    delete(table, id)
    {
        const rowIndex = this.#database[table].findIndex(row => { return row.id === id});

        if(rowIndex > -1){
            this.#database[table].splice(rowIndex, 1);
            this.#persist();
            return true;
        }
            
        return false;        
    }

    update(table, id, data)
    {
        const rowIndex = this.#database[table].findIndex(row => row.id === id);
        if(rowIndex > -1){
            let row       = this.#database[table][rowIndex];

            row.title                       = data.title;
            row.description                 = data.description;
            row.updated_at                  = now();
            this.#database[table][rowIndex] = row;
            
            this.#persist();
            return true;
        }
        return false;
    }

    complete(table, id)
    {
        const rowIndex = this.#database[table].findIndex(row => row.id === id);
        if(rowIndex > -1){

            let row = this.#database[table][rowIndex];            
            row.completed_at = now();
            this.#database[table][rowIndex] = row;
            this.#persist();
            return true;
        }
        return false;
    }

    select(table, search)
    {
        let  data = this.#database[table] ?? [];

        if(search){
            data = data.filter(row =>{
                return Object.entries(search).some(([key,value]) => {                    
                    return row[key].toLowerCase().includes(value.toLowerCase());
                })
            });
        }
        return data; 
    }    
}