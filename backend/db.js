
const mongoose =require('mongoose');
//
const dbURI = `mongodb+srv://<username>:<password>@cluster.nijfg.mongodb.net/?retryWrites=true&w=majority&appName=Swaroop`
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('connected to db')
  // app.listen(3000)
).catch((err) => console.log(err));