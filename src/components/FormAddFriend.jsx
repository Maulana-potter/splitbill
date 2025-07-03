import { useState } from "react";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form
      className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 space-y-4"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Tambah Teman Baru
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          👤 Nama Teman
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Masukkan nama teman"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          📸 URL Foto
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="https://i.pravatar.cc/48"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        disabled={!name}
      >
        Tambah Teman
      </button>
    </form>
  );
};

export default FormAddFriend;
