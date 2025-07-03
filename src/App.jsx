import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends); // perbaikan nama state
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]); // perbaikan nama setter
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    ); // perbaikan typo
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            💰 Split Bill App
          </h1>
          <p className="text-gray-600">
            Kelola hutang piutang dengan teman-teman
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <FriendList
                friends={friends}
                onSelected={handleSelectedFriend}
                selectedFriend={selectedFriend}
              />

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleShowAddFriend}
                  className={`w-full font-medium py-3 px-4 rounded-md transition-colors ${
                    showAddFriend
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {showAddFriend ? "Tutup" : "Tambah Teman"}
                </button>
              </div>
            </div>

            {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          </div>

          {/* Main Content */}
          <div>
            {selectedFriend ? (
              <FormSplitBill
                selectedFriend={selectedFriend}
                onSplitBill={handleSplitBill}
              />
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="text-6xl mb-4">👥</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Pilih Teman untuk Split Bill
                </h2>
                <p className="text-gray-600">
                  Pilih teman dari daftar di sebelah kiri untuk mulai split bill
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
