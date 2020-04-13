const express = require("express");
const router = express.Router();
const blogModel = require("../models/blogModel");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const data = await blogModel.getallBlog();
  res.render("index", {
    locals: {
      title: "Hawaii Planning",
      data: data,
    },
    partials: {
      partial: `index`,
    },
  });
});

// router.get("/all", async function (req, res, next) {
//   let blogs = await blogModel.getallBlog();
//   res.json(blogs);
// });

module.exports = router;
