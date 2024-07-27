import fs from 'node:fs/promises'
import {parse} from 'csv-parse';


const tasksCsv = new URL('tasks.csv', import.meta.url);

const batchTask = async () => {

    try
    {
        const contentCSV = await fs.readFile(tasksCsv);

        const parser     = parse(contentCSV, {
            columns: true, 
            delimiter: ',',
            skip_empty_lines: true 
        });

        for await (const row of parser){            
            try{
                let body = JSON.stringify(row);                
                fetch('http://localhost:3333/tasks', { method: 'POST', body, duplex: 'half'})
                .then(e => console.log('Response api: ', e.status));
            }catch(e){                
                continue;
            }
        }        
    }catch(e){
        console.log(e);
    }
};

batchTask();