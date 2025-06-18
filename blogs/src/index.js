import express from 'express'
const app = express();
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome blogs' })
})
app.listen(9002, () => {
    console.log('Server run port ' + 9001);
})