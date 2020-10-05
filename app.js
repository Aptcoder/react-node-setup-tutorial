const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;



app.get('/api/hello', (req, res) => {
    res.send({
        date: new Date()
    })
})

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}
else {
    app.get('*', (req,res) => {
        res.send({
            message: 'route not found'
        })
    })
}

app.listen(PORT,() => {
    console.log('Server is listening at port:', PORT)
})