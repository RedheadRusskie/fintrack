import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { collection, query, getDocs } from "firebase/firestore/lite";
import db from "../../db/db";

const useGetExpenses = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchExpenses = async () => {
      const expensesCollection = collection(db, "Expenses");
      const expensesQuery = query(expensesCollection);

      const querySnapshot = await getDocs(expensesQuery);
      const expenseData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      queryClient.setQueryData("expenses", expenseData);
    };

    fetchExpenses();
  }, [queryClient]);

  return useQuery("expenses");
};

export default useGetExpenses;
