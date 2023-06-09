import { Timestamp } from "firebase/firestore";

export type Expense = {
  id?: string;
  name: string;
  amount: number;
  date: Timestamp;
  category: string;
  currency: string;
};

export type FormData = {
  name: string;
  amount: number;
  currency: string;
  category: string;
};
