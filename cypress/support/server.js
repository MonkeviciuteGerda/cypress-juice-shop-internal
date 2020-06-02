const express = require('express');
const cypressConfig = require('../../cypress');

const app = express();
const baseURL = cypressConfig.baseUrl;
const axios = require('axios').default.create({ baseURL });

let token;

app.get('/status', (_req, res) => {
    res.sendStatus(200);
});

app.get('/connect', (req, res) => {
    const { username, password } = req.query;
  
    axios.post('/rest/user/login', {
        email: username,
        password,
    }).then(({ data }) => {
        if (data.authentication.token) {
            token = data.authentication.token;
            console.log(`Logged in as ${username}`);
            res.sendStatus(200);
        }
    }).catch((e) => {
        console.log('Auth error', e.message);
        res.sendStatus(500);
    });
});

app.get('/disconnect', (req, res) => {
    console.log('Disconnecting');
    token = '';
    res.sendStatus(200);
});

app.listen(8081, () => {
    console.log('Example app listening on port 8081!');
});

app.get('/postProductReview', (req, res) => {
    const { username, text, productId } = req.query;

    const body = {
        message: text,
        author: username
    };

    axios.put(`/rest/products/${productId}/reviews`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }).then(() => {
        console.log('Product review posted');
        res.sendStatus(200);
    }).catch((e) => {
        console.log('Product review post error:', e.message);
        res.sendStatus(500);
    });
});