export type ExpenseCategory = "food" | "phone";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
  category: ExpenseCategory;
}
