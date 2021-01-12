const express = require("express");
const nunjucks = require("nunjucks");
const methodOverride = require("method-override");
const server = express();
const data = require("./data");
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.set("view engine", "njk");
server.use(express.static("public"));
server.use(methodOverride("_method"));

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
  watch: true,
});


server.get("/", (req, res) => {
    return res.render("index",{item: data});
} );

server.listen(5000, () => {
  console.log("Server Is Running");
});
