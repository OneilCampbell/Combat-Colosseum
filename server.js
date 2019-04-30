const express = require("express");
const app = express();
const PORT = process.env.PORT || 4567;

const path = require("path");
// app.use("/", express.static("./build/"));
// app.use(express.static(path.join(__dirname, "./build/")));
app.use(express.static(__dirname + "/"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const { User, Score } = require("./models/models");

app.get("/users", async (req, res) => {
    try {
        const allUsers = await User.findAll();
        res.json({allUsers})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/users/:username", async (req, res) => {
    try {
        const thisUser = await User.findAll({where:{username: req.params.username}});
        res.json({ thisUser })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/users/id/:id", async (req, res) => {
    try {
        const thisUser = await User.findByPk(req.params.id);
        res.json({ thisUser })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.post("/users", async (req, res) => {
    try {
        await User.create(req.body)
        res.send(true)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/scores", async (req, res) => {
    try {
        const allScores = await Score.findAll({ order: [['score', 'DESC']] });
        res.json({ allScores })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.post("/scores", async (req, res) => {
  try {
    await Score.create(req.body);
    res.send(true)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});


// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
// if (process.env.NODE_ENV == "production") {
//   app.get("/*", function(request, response) {
//     response.sendFile(path.join(__dirname, "build", "./public/index.html"));
//   });
// }

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join('build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));