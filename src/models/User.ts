//dependencies
import { hash } from 'bcrypt';
import { model, Schema } from 'mongoose';
import AppError from '../utils/AppError';
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
   email: { required: true, unique: true, type: String, trim: true, lowercase: true },
   phone: { required: true, unique: true, type: String, trim: true },
   password: { required: true, type: String, trim: true },
});

userSchema.pre('save', async function save(next) {
   if (!this.isModified('password')) return next();
   try {
      this.password = await hash(this.password, 12);
      return next();
   } catch (error) {
      return next(new AppError(500, 'Error while hasing the password'));
   }
});

//create mongoose
const User = model('User', userSchema);

//export the model
export default User;
