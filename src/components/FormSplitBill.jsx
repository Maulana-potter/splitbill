import { useState } from "react";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }
  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>patungan Bareng sih X</h2>

      <label htmlFor="">💸total biaya</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor="">🤑tagihan kamu</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />
      <label htmlFor="">💰 tagihan {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />

      <label htmlFor="">🪙 ditalangin sapa </label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Tambah</button>
    </form>
  );
};

export default FormSplitBill;
