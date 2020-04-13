const express = require("express");
const router = express.Router();
const commentModel = require("../models/commentModel");

/* GET home page. */
router.get("/", (req, res) => {
  res.send("Hawaii").status(200);
});

//Get all posts
router.get("./all", async function (req, res, next) {
  let comments = await commentModel.getallComments();
  res.json(comments);
});

/* add comment */
router.post("/", async (req, res) => {
  const { user_name, comment, user_email } = req.body;
  const response = await commentModel.addComment(
    user_name,
    comment,
    user_email
  );

  if (response.command === "INSERT" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send("Could not add new comment").status(409);
  }
});

module.exports = router;
