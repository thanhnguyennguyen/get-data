# get-data
Node library for getting JSON document

## Install
```
npm install --save get-data
```

## Usage

```nodejs
const getData=require('get-data')


// promise
let dataObj;
let url = http() + ip + '/getData', method = 'post';
getData(url, method)
.then(function (result) {
    console.dir(result);
    dataObj = result;
})
.catch(function(error){
    console.log(error);
});


// async/await
(async function(){
    let dataObj;
    let url = http() + ip + '/getData', method = 'post';
    try{
        const result = await getData(url, method);
        dataObj = result;
    } catch (error) {
        console.log(error);
    }
})();

```
