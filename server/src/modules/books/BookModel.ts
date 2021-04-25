import mongoose, { Model } from 'mongoose';
import { IBook } from './IBook';

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    cover: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      description:
        'Soft delete. Usually when users want to hide something from public view.',
      required: true,
      default: true,
      index: true,
    },
    removedAt: {
      type: Date,
      description: 'Hard delete',
      default: null,
    },
  },
  {
    collection: 'books',
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

export type BookModel = Model<IBook>;

// eslint-disable-next-line no-redeclare
const BookModel: BookModel = mongoose.model<IBook, BookModel>('books', Schema);

export default BookModel;
