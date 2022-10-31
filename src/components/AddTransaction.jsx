import { TransactionContext } from "../context/transactionContext";
import { useContext, useState } from "react";
function AddTransaction() {
  const [formData, setFormData] = useState({
    id: "",
    text: "",
    amount: "",
    type: "income",
  });
  const { transactions, setTransactions } = useContext(TransactionContext);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.text) {
      alert("Enter a text");
    } else if (!formData.amount) alert("Enter amount");
    else {
      const id = new Date().valueOf();
      setTransactions((prevTransaction) => [
        ...prevTransaction,
        { ...formData, id: id },
      ]);
      localStorage.setItem(
        "transactions",
        JSON.stringify([...transactions, { ...formData, id: id }])
      );
      setFormData({
        id: "",
        text: "",
        amount: "",
        type: "income",
      })
    }
  }

  //   console.log(transactions);
  return (
    <>
      <div className="mx-auto md:w-9/12 ">
        <h2 className="pb-1 border-b border-b-gray-500 text-lg font-semibold">
          Add New Transaction
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text..."
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="mt-3 p-3 outline-none rounded shadow"
          />
          <select
            value={formData.type}
            onChange={handleChange}
            name="type"
            className="mt-3 p-3 outline-none rounded shadow"
          >
            <option value="income" default>
              Income
            </option>
            <option value="expense">Expense</option>
          </select>
          <input
            className="mt-3 p-3 outline-none rounded shadow"
            type="number"
            min="0"
            placeholder="Enter Amount..."
            value={formData.amount}
            name="amount"
            onChange={handleChange}
          />
          <button className="bg-[#372948] mt-3 text-white p-3 rounded outline-none cursor-pointer">Make Transaction</button>
        </form>
      </div>
    </>
  );
}
export default AddTransaction;
