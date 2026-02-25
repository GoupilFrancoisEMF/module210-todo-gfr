const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

const tasksRoutes = require("./routes/tasksRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use("/api/tasks", tasksRoutes);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.use((err, req, res, next) => {
    console.error(err); // pour debug
    res.status(err.status || 500).json({ error: err.message || err });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//TEST!!