import { useState } from "react";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount && myBill ? Number(amount) - Number(myBill) : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !amount ||
      !myBill ||
      Number(myBill) > Number(amount) ||
      Number(myBill) < 0
    )
      return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -Number(myBill));
  }

  return (
    <form
      className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Patungan Bareng {selectedFriend.name}
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          💸 Total Biaya
        </label>
        <input
          type="number"
          value={amount}
          min={0}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Masukkan total biaya"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          🤑 Tagihan Kamu
        </label>
        <input
          type="number"
          value={myBill}
          min={0}
          max={amount}
          onChange={(e) =>
            setMyBill(
              Number(e.target.value) > Number(amount) ? amount : e.target.value
            )
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Masukkan tagihan kamu"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          💰 Tagihan {selectedFriend.name}
        </label>
        <input
          type="text"
          value={friendBill}
          disabled
          className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          🪙 Siapa yang Bayar?
        </label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="user">Kamu</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        disabled={
          !amount ||
          !myBill ||
          Number(myBill) > Number(amount) ||
          Number(myBill) < 0
        }
      >
        Split Bill
      </button>
    </form>
  );
};

export default FormSplitBill;
