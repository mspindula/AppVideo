const express = require('express'); 
const app = express();
const path = require("path")

const videos =[
 "26Tsb_l36I4",
 "xK30Iabee_o",
 "0caNFGsKoKw",
 "tLu5G9VjCyo",
 "lpaYqRpBaUU",
];

app.get('/api/videos', (req, res) =>{
    res.send(videos)
})

if(process.env.NODE_ENV != 'development'){
    app.use(express.static(path.resolve(__dirname, 'front/build')))

    app.get('/{*splat}', (req, res) => {
            res.sendFile(
                path.join(__dirname, 'front/build/index.html'),
                (error) => {
                    if (error) {
                        res.status(500).send(error);
                    }
                }
            );
        });
}
app.listen(3000,()=>{
    console.log("Servirdor Online");
    
})