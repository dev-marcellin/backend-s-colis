//const { findById } = require('../models/');
//const ticketModel = require('../models/ticket.model');
const colisModel = require('../models/colis.model');
const qr = require("qrcode");



module.exports.print = async (req, res)=>{

    

    try{
       fact =  await colisModel.findById(
            req.body.id,
            /*(err, data)=>{
                if(!err) res.status(200).json(data);
                else return res.status(400).send({err: err})
            }*/

        );



        const url = fact.code;
          
    
    qr.toDataURL(url, (err, src) => {
        if (err) res.send("Error occured");
      
        console.log(fact);
       let a = fact.description;
       let b = fact.depart;
       let c = fact.destination;
       let d = fact.prix;
        //res.render("scan", { src });
 res.render("index.ejs",{src, a,b , c , d});
    })
    
    }catch(err){
        console.log("errrrr "+err)
    }
}

/*module.exports.qr = (req, res) => {

    const url = "douala2-bertoua2";

    
    if (url.length === 0) res.send("Empty Data!");
    
    
    
    qr.toDataURL(url, (err, src) => {
        if (err) res.send("Error occured");
      
       
        //res.render("scan", { src });
        let a = 
 res.render("index.ejs",{src});
    })
}*/