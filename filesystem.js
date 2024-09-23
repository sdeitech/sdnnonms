import fs from 'fs';


export const readfile=() =>{
//     fs.readFile('input.txt', function (err, data) {
//         if (err) { return console.error(err); } 
//        console.log("Asynchronous read: " + data.toString()); 
//        }); 

//        var data = fs.readFileSync('input.txt'); 
// console.log("Synchronous read: " + data.toString());
//  console.log("Program Ended");
//  fs.unlink('input.txt',()=>{

//  })








 // Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Write data to the stream
writableStream.write('Hello, World!\n');
writableStream.write('This is a writable stream example.\n');

// End the stream
writableStream.end(() => {
    // console.log('Finished writing to the file.');
});

// Handle errors
writableStream.on('error', (err) => {
    console.error('Error:', err);
});

// Listen for the finish event
writableStream.on('finish', () => {
    // console.log('All data has been flushed to the file.');
});


var data = '';
var  readerStream = fs.createReadStream('output.txt'); 

readerStream.setEncoding('UTF8'); 

readerStream.on('data', function(chunk) {
 console.log(chunk,"chunk data",data)

 data += chunk;
 console.log(chunk,"chunk data",data)
 }); 

  
readerStream.on('end',function() { 
console.log(data,"ended");
 }); 

 readerStream.on('finish',function() { 
    console.log(data,"finish");
     });


readerStream.on('error', function(err) { 
console.log(err.stack); 
});
 console.log("Program Ended")
}

