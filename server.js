const express = require('express');
const cors = require('cors')
const axios = require('axios')
const app = express();
app.use(cors()); // Using CORS in middleware (Before hitting the API "use" intersects with all API requests)

app.get("/", (req, res) => {
    res.send("Node server running")
})

app.get("/highlights", (req, res) => {
    axios.get("https://web-dev.dev.kimo.ai/v1/highlights")
        .then((resp) => {
            res.send(resp.data)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/categories", (req, res) => {
    axios.get("https://web-dev.dev.kimo.ai/v1/categories")
        .then((resp) => {
            res.send(resp.data)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/activities/:category", (req, res) => {
    axios.get(`https://web-dev.dev.kimo.ai/v1/activities/${req.params.category}`)
        .then((resp) => {
            res.send(resp.data)
        })
        .catch((err) => {
            console.log(err)
        })
})

const port = 7000;
app.listen(port, () => {   // Where we want to run our node server
    console.log(`Server is running on port ${port}`);
});