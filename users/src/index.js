import express from 'express'
const app = express();
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome users' })
})
app.listen(9001, () => {
    console.log('Server run port ' + 9001);
})