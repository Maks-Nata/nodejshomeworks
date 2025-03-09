const afs=require('fs/promises');
const fs=require('fs');
const readline=require('readline/promises')
const path = require('node:path');

const start=async ()=>{
    const sourceFillePath=path.join(process.cwd(), 'emails.txt');
    const targetFillePath=path.join(process.cwd(),'gmails.txt')

    const fileStream=fs.createReadStream(sourceFillePath,'utf8');
    const readLine=readline.createInterface({input:fileStream});
    try {
for await (const line of readLine){
    const email=line.split('\t').slice(-1)[0];
    const dominName=email.split('@').slice(-1)[0];
    if(dominName==='gmail.com'){await afs.appendFile(targetFillePath,`${email}\n`)}

}
    }
    finally {
        readLine.close()
    }
}
start()