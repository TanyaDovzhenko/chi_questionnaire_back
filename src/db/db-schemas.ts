import mongoose from 'mongoose';

export const User = mongoose.model('User', new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    department: { type: String },
    isAdmin: { type: Boolean, required: true },
}));
