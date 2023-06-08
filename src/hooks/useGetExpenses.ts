import { useEffect, useState } from "react";
import { Expense } from "../types";
import db from "../../db/db";
import { collection, onSnapshot } from "firebase/firestore";

const useGetExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const expensesCollection = collection(db, "Expenses");

    const unsubscribe = onSnapshot(expensesCollection, (snapshot) => {
      const expensesData: Expense[] = snapshot.docs.map((doc) => {
        const { amount, category, currency, date, name } = doc.data();
        return {
          id: doc.id,
          amount,
          category,
          currency,
          date,
          name,
        };
      });

      setExpenses(expensesData);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { data: expenses, isLoading };
};

export default useGetExpenses;
