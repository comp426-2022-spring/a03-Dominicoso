const express = require('express')
const app = express()

const args = require('minimist')(process.argv.slice(2))
args["port"]

const port = args.port || process.env.port || 5000

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
});

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});

app.get('/app/', (req, res) => {
    res.status(200).end('OK')
    res.type('text/plain')
    // // Respond with status 200
    //     res.statusCode = 200;
    // // Respond with status message "OK"
    //     res.statusMessage = 'OK';
    //     res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    //     res.end(res.statusCode+ ' ' +res.statusMessage)
    });

app.get('app/echo/:number', (req, res) => {
    res.status(200).json({ 'message': req.params.number })
})