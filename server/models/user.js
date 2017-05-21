import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: { type: String, default: '', required: true, index: { unique: true } },
  password: { type: String, default: '', required: true },
  create_at: { type: 'Date', default: Date.now }
});

export default mongoose.model('User', userSchema);

