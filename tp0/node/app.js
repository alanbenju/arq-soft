const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/timeout', (req,res)=>{
    setTimeout((_)=>{
        res.send("Timeout");
    }, 10000);
})

app.listen(3000, () => console.log('TP0 listening on port 3000!'))