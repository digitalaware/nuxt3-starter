import { Document } from 'mongoose';

export interface ExtendedModel extends Document {
	verifyPassword: (password: string) => boolean;
	verifyPasswordSync: (password: string) => Promise<boolean>;
}
