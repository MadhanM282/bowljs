const express = require("express");

const Food = require("../models/projects.models");

const router = express.Router();

const app = express();

const cors = require("cors");
app.use(cors())



router.get("/:category",cors(), async (req, res) => {
    try {
      const food = await Food.find({ category: req.params.category }).lean().exec();
      return res.send(food);
      // res.send(food);
    } catch (err) {
      res.status(520).send(err.message);
    }
  });

  module.exports = router