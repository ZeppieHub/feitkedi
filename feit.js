const { get, link } = require("snekfetch");
const Downloader = require('nodejs-file-downloader');
var resimlink;
setInterval(function(){
    try {
        get('https://aws.random.cat/meow').then(response => {
                resimlink = response.body["file"];
              //message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[4]}`}]});
              
              (async () => {//Wrapping the code with an async function, just for the sake of example.
    
                const downloader = new Downloader({
                  url: resimlink,//If the file name already exists, a new file with the name 200MB1.zip is created.     
                  directory: "./downloads",//This folder will be created, if it doesn't exist.               
                })
                console.log(resimlink);
                
                try {
                    downloader.download();//Downloader.download() returns a promise.
                  console.log('done');
                } catch (error) {//IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
                  //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
                  console.log('Download failed',error)
                }
            
            
            })();
        })
        } catch (e) {
            console.log('error!');
        }
}, 1000);

