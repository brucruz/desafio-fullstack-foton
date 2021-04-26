import { ObjectID } from 'mongodb';
import Book from '../modules/books/BookType';

const isActive = true;
const createdAt = new Date();
const updatedAt = new Date();

export const initialBooks: Book[] = [
  {
    _id: new ObjectID(),
    author: 'Gary Keller',
    title: 'The ONE Thing',
    subtitle: 'The Surprisingly Simple Truth Behind Extraordinary Results',
    description: `• More than 500 appearances on national bestseller lists • #1 Wall Street Journal, New York Times, and USA Today • Won 12 book awards • Translated into 35 languages • Voted Top 100 Business Book of All Time on Goodreads People are using this simple, powerful concept to focus on what matters most in their personal and work lives. Companies are helping their employees be more productive with study groups, training, and coaching. Sales teams are boosting sales. Churches are conducting classes and recommending for their members. By focusing their energy on one thing at a time people are living more rewarding lives by building their careers, strengthening their finances, losing weight and getting in shape, deepening their faith, and nurturing stronger marriages and personal relationships. YOU WANT LESS. You want fewer distractions and less on your plate. The daily barrage of e-mails, texts, tweets, messages, and meetings distract you and stress you out. The simultaneous demands of work and family are taking a toll. And what's the cost? Second-rate work, missed deadlines, smaller paychecks, fewer promotions--and lots of stress. AND YOU WANT MORE. You want more productivity from your work. More income for a better lifestyle. You want more satisfaction from life, and more time for yourself, your family, and your friends. NOW YOU CAN HAVE BOTH — LESS AND MORE. In The ONE Thing, you'll learn to * cut through the clutter * achieve better results in less time * build momentum toward your goal* dial down the stress * overcome that overwhelmed feeling * revive your energy * stay on track * master what matters to you The ONE Thing delivers extraordinary results in every area of your life--work, personal, family, and spiritual. WHAT'S YOUR ONE THING?`,
    cover:
      'http://books.google.com/books/content?id=rB2ZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    isActive,
    createdAt,
    updatedAt,
  },
  {
    _id: new ObjectID(),
    author: 'Nir Eyal',
    title: 'Hooked',
    subtitle: 'How to Build Habit-Forming Products',
    description: `Revised and Updated, Featuring a New Case Study How do successful companies create products people can’t put down? Why do some products capture widespread attention while others flop? What makes us engage with certain products out of sheer habit? Is there a pattern underlying how technologies hook us? Nir Eyal answers these questions (and many more) by explaining the Hook Model—a four-step process embedded into the products of many successful companies to subtly encourage customer behavior. Through consecutive “hook cycles,” these products reach their ultimate goal of bringing users back again and again without depending on costly advertising or aggressive messaging. Hooked is based on Eyal’s years of research, consulting, and practical experience. He wrote the book he wished had been available to him as a start-up founder—not abstract theory, but a how-to guide for building better products. Hooked is written for product managers, designers, marketers, start-up founders, and anyone who seeks to understand how products influence our behavior. Eyal provides readers with: • Practical insights to create user habits that stick. • Actionable steps for building products people love. • Fascinating examples from the iPhone to Twitter, Pinterest to the Bible App, and many other habit-forming products.`,
    cover:
      'http://books.google.com/books/content?id=rB2ZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    isActive,
    createdAt,
    updatedAt,
  },
];