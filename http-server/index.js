// const http = require("http");
// const fs = require("fs");
// fs.readFile("home.html", (err, home) => {
//     console.log(home.toString());
//   });

// fs.readFile("home.html", (err, home) => {
//     if (err) {
//       throw err;
//     }
//     http
//       .createServer((request, response) => {
//         response.writeHeader(200, { "Content-Type": "text/html" });
//         response.write(home);
//         response.end();
//       })
//       .listen(3000);
//   });
const args = require("minimist")(process.argv.slice(2));

// console.log(args);
// console.log(args.port);

const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});
fs.readFile("registration.html",(err,registration) => {
  if (err) {
    throw err;
  }
registrationContent = registration;
})
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args.port);















// eslint-disable-next-line no-undef
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   const stream = fs.createReadStream('sample.txt')
//   stream.pipe(res)
// //   fs.readFile('sample.txt', (err, data) => {
// //     if (err) throw err
// //     res.end(data)
// //   })
// })
// server.listen(3000)

// const readline = require("readline");

// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// lineDetail.question(`Please provide your name - `, (name) => {
//   console.log(`Hi ${name}!`);
//   lineDetail.close();
// });
