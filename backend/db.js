
const mongoose =require('mongoose');
//`mongodb+srv://<username>:<password>@cluster.nijfg.mongodb.net/?retryWrites=true&w=majority&appName=Swaroop`
const dbURI = `mongodb+srv://swaroop:Swaroopmongo1@swaroop.nijfg.mongodb.net/?retryWrites=true&w=majority&appName=Swaroop`
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('connected to db')
  // app.listen(3000)
).catch((err) => console.log(err));