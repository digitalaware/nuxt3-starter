import mongoose, { Schema } from 'mongoose';
import bcrypt from 'mongoose-bcrypt';
import { ExtendedModel } from '~/models/mongoose.types';

export interface User {
	_id?: string | Schema.Types.ObjectId;
	username: string;
	password?: string;
	createdAt: Date | string;
}

const userSchema = new mongoose.Schema<User & ExtendedModel>(
	{
		username: { type: String, unique: true, required: true },
		password: { type: String, bcrypt: true, rounds: 8, required: true, select: false },
		createdAt: { type: Date, default: () => Date.now() },
	},
	{ timestamps: true, strict: true, strictQuery: true }
);
userSchema.plugin(bcrypt);

export default mongoose.model('User', userSchema, 'user');
