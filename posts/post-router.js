const express = require("express");

// database access using knex
const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  //get a list of posts from database
  db.select("*")
    .from("posts")
    .then((posts) => {
      res.status(200).json({ posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  db("posts")
    .where({
      id: req.params.id,
    })
    .select("*")
    .then((posts) => {
      res.status(200).json({ posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
