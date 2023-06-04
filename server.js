const express = require('express');
const cors = require('cors')
const axios = require('axios')
const app = express();
app.use(cors());

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

const port = 7000; // Choose any port you prefer
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});