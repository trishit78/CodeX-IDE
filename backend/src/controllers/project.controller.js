import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';


const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async(req,res)=>{
    // const {stdout,stderr} = await execPromisified('pwd');
    // console.log('stdout',stdout);
    // console.error('stderr:',stderr);


    //create a unique id then inside the projects folder -> then create a new dir with uuid
    const projectId = uuid4();
    console.log("New project id is",projectId);
    await fs.mkdir(`./projects/${projectId}`); 


    const response = await execPromisified('printf "n\ny\n" | npm create vite@latest sandbox -- --template react',{
        cwd:`./projects/${projectId}`
    });



    return res.json({
        message:" Project created",
        data:projectId
    })

}

