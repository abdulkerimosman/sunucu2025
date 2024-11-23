/*
let http = require('http');

let url = require('url');

let server = http.createServer((req,res)=>{
  res.writeHead(200 , { "content-type":"text/html" });
  let my_first_query = url.parse(req.url,true);
  let my_query = my_first_query.query;
  let text = my_query.kullanici_adi+' '+my_query.sifre;
  res.end(my_first_query)
}).listen(3000) 

*/

/*
let http = require('http');
let url = require('url');

let server = http.createServer((req,res)=>{
  res.writeHead(200, { 'content-type':'text/html' });
  parsed_item = url.parse(req.url,true);
  res.end(parsed_item.host);

})

server.listen(3001)

*/

/*
let http = require('http');
let url = require('url');

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  
  // Parse the URL, including query parameters
  let parsed_item = url.parse(req.url, true);
  console.log(parsed_item.query.password);

  // Access and display the host (localhost:3001)
  res.end(parsed_item.query.password);
});

server.listen(3001); // http://localhost:3001/?username=can.aydin&password=1234
*/
/*
let http = require('http');

let x = require('upper-case');

let server = http.createServer((req,res)=>{
  res.writeHead(200,{ 'content-type':'text/html' })
  res.write(x.upperCase('Hello, World!'))
  res.end('Deneme')
  console.log('Done!')
}).listen(3001);
*/


/*let url = require('url');

let adr = 'http://www.deu.edu.tr/ogrenciler.html?username=can.aydin&password=1234';

let parsed = url.parse(adr,true);

console.log(parsed.hostname)
console.log(parsed.path)
console.log(parsed.query.username) 
*/