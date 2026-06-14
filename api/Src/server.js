import express from 'express';
import cors from 'cors';

const app = express();
app.get('/test', (req,res)=>{
    res.send('hello w');
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
