import nodeRestClient from 'node-rest-client';

const Client = nodeRestClient.Client;
const client = new Client();

const Message = {
  "data":{
    "why": 100
  }, 
}

client.get("http://www.mocky.io/v2/59e062c70f00005c01effb01", Message,(data, response) => {
   console.log(data);
   // raw response 
  //  console.log(response);
});


// client.post("https://httpbin.org/anything", Message, (data, response) => {
//   console.log(data);
//    // raw response 
//   //  console.log(response);
// });