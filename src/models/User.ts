//dependencies
import { model, Schema } from 'mongoose';

//define user interface
interface User {
   name: string;
   email: string;
   phone: string;
   password: string;
}

//create schema
const userSchema: Schema = new Schema<User>({
   name: { required: true, type: String, trim: true },
   email: { required: true, type: String, trim: true, lowercase: true },
   phone: { required: true, type: String, trim: true },
   password: { required: true, type: String, trim: true },
});

//create mongoose
const User = model('User', userSchema);

//export the model
export default User;
