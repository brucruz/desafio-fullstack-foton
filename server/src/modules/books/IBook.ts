import { Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  subtitle?: string;
  author: string;
  description: string;
  cover?: string;
  isActive: boolean;
  removedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
