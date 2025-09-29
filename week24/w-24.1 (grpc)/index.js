const express = require('express');
const bodyParser = require('body-parser');


const app = express()
// Parse JSON bodies
app.use(bodyParser.json());

// Define a sample method
function add(a, b) {
    return a + b;
}

// Handle JSON-RPC requests
app.post('/rpc', (req, res) => {
    const { jsonrpc, method, params, id } = req.body;

    if (jsonrpc !== '2.0' || !method || !Array.isArray(params)) {
        res.status(400).json({ jsonrpc: '2.0', error: { code: -32600, message: 'Invalid Request' }, id });
        return;
    }

    // Execute the method
    let result;
    switch (method) {
        case 'add':
            result = add(params[0], params[1]);
            break;
        default:
            res.status(404).json({ jsonrpc: '2.0', error: { code: -32601, message: 'Method not found' }, id });
            return;
    }

    // Send back the response
    res.json({ jsonrpc: '2.0', result, id });
});

            
app.listen(3000,()=>{
    console.log('server up been running on port 3000')
})