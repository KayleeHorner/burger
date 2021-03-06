const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all(function (data) {
    const object = {
      burger_name: data,
    };
    console.log(object);
    res.render("index", object);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["burger_name", "devoured"], 
  [req.body.burger_name, false], 
  function (result) {
    res.json({ id: result.insertID });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: true,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
