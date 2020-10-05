const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;



app.get('/api/hello', (req, res) => {
    res.send({
        date: new Date()
    })
})


app.listen(PORT,() => {
    console.log('Server is listening at port:', PORT)
})