const Friend = ({ friend, onSelected, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
        isSelected
          ? "bg-blue-50 border-blue-200 shadow-md"
          : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3">
        <img
          src={friend.image}
          alt={friend.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{friend.name}</h3>
          {friend.balance < 0 && (
            <p className="text-red-600 text-sm">
              Kamu berhutang Rp {Math.abs(friend.balance).toLocaleString()} ke{" "}
              {friend.name}
            </p>
          )}
          {friend.balance > 0 && (
            <p className="text-green-600 text-sm">
              {friend.name} berhutang Rp{" "}
              {Math.abs(friend.balance).toLocaleString()} ke kamu
            </p>
          )}
          {friend.balance === 0 && (
            <p className="text-gray-500 text-sm">Tidak ada hutang</p>
          )}
        </div>
      </div>
      <button
        className={`px-4 py-2 rounded-md font-medium transition-colors ${
          isSelected
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        onClick={() => onSelected(friend)}
      >
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
};

export default Friend;
