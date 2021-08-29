const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://'+process.env.BD_USER_PASS+'@marc.alxbs.mongodb.net/scolis',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}
).then(()=>console.log("connecté a mongo db"))
.catch((err) => console.log("Failled to connect to mongo db",err));