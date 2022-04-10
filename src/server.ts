//dependencies
import mongoose from 'mongoose';
//internal imports
import app from './app';
//define the PORT
const PORT: any = process.env.PORT || 3000;

//Prepare mongodb connection URL
const connectionURL: string = process.env.MONGODB_URI || 'mongodb://localhost/realtime-monitoring-api';

//connect database and start the app
mongoose
   .connect(connectionURL)
   .then(() => {
      console.log('Datbase Connected Successfully');
      app.listen(PORT, () => console.log(`Sever is alive on PORT:${PORT}`));
   })
   .catch((error) => {
      console.log(error);
   });
