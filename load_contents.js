const fs = require('fs');

var promise = new Promise(function(resolve,reject){
    const path = "./abc.text";
    resolve(path);
})


promise.then(isFileExist)
        .then(checkstat)
        .then(readFile)
        .then(function(msg){
            console.log(msg)
        }).catch(function(error){
            console.log(error)
})


function isFileExist(path){
    return new Promise(function(resolve, reject) {
        fs.exists(path,(exists) => {
            if (exists) 
                resolve(path);
            else 
                reject("File does not exist"); 
        });
    });

}

function checkstat(path){
    return new Promise(function(resolve, reject) {
        fs.stat(path, (err, stats) => {
            if (err) {
                reject("Error trying to get stats"); 
            }
            if (stats.size > 0) {
                console.log(stats);
                resolve(path);
            }else{
                reject("File exists but there is no content"); 
            }
        })
    });

}        

function readFile(path){
    return new Promise(function(resolve, reject) {
        fs.readFile(path, (err, buffer) => {
            if (err) {
                reject("Error trying to get stats");
            }else{
                resolve(buffer);
            }
        })
    });

} 

