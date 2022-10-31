import { TransactionContext } from "../context/transactionContext";
import { useContext } from "react";
function Balance() {
  const { transactions, setTransactions } = useContext(TransactionContext);
  function handleClick(e) {
    const newArr = transactions.filter(
      (transaction) => transaction.id !== parseInt(e.target.parentElement.id)
    );
    localStorage.setItem("transactions", JSON.stringify([...newArr]));
    setTransactions(newArr);
  }
  let total = 0;
  let income = 0;
  let expense = 0;
  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      income = income + parseInt(transaction.amount);
    } else {
      expense += parseInt(transaction.amount);
    }
  });
  total = income - expense;
 
  return (
    <>
      <div className="mx-auto flex flex-col md:w-9/12">
        <div className="text-center font-semibold text-xl">Your Balance</div>
        <div
          className={`text-center text-3xl font-bold ${
            total <= 0 ? "text-[#c0392b]" : "text-[#2ecc71]"
          }`}
        >
          ₹ {total ? total : 0}
        </div>
        <div className="flex bg-white mt-6 p-4 rounded shadow-md">
          <div className="flex flex-col w-1/2 text-center border-r border-r-gray-300">
            <span className="font-semibold">INCOME</span>
            <span className="text-xl font-semibold text-[#2ecc71]">
              ₹ {income}
            </span>
          </div>
          <div className="flex flex-col w-1/2 text-center">
            <span className="font-semibold">EXPENSE</span>
            <span className="text-xl font-semibold text-[#c0392b]">
              ₹ {expense}
            </span>
          </div>
        </div>
        <h2 className="mt-6 pb-1 border-b border-b-gray-500 text-lg font-semibold">
          History
        </h2>
        <div className="md:overflow-y-auto md:h-80 history">
          {JSON.parse(localStorage.getItem("transactions")).length !== 0 ? (
            JSON.parse(localStorage.getItem("transactions")).map(
              (transaction) => (
                <div
                  key={transaction.id}
                  id={transaction.id}
                  className="bg-white mt-3 flex justify-between text-md"
                >
                  <div
                    className={`py-2 pl-4 border-l-4 ${
                      transaction.type === "expense"
                        ? "border-l-[#c0392b]"
                        : "border-l-[#2ecc71]"
                    }`}
                  >
                    {transaction.text}
                  </div>
                  <span
                    onClick={handleClick}
                    className="py-2 px-4 bg-[#c0392b] cursor-pointer text-white"
                  >
                    &times;
                  </span>
                </div>
              )
            )
          ) : (
            <div className="mt-3 font-medium">No Transactions Yet</div>
          )}
        </div>
      </div>
      <style jsx="true">
        {`
          .history {
            scrollbar-width: thin;
          }
        `}
      </style>
    </>
  );
}
export default Balance;
