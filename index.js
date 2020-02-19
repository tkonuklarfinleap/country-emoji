// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var emojiFlags = require('emoji-flags');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hi');
});



app.get('/emoji/all', async (req, res) => {
    const list = emojiFlags.data.map(d => {
        const item = {};
        item["flag"] = d.emoji;
        item["prefix"] = '';
        item["country"] = d.code;
        return item;
    })
    res.send(list);
});

app.listen(5000, err => {
    console.log('Listening');
});