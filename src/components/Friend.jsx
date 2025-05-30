const Friend = ({ friend, onSelected, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <div>
      <li className={isSelected ? "selected " : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            kamu berhutang Rp .{Math.abs(friend.balance)} ke {friend.name}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} berhutang Rp .{Math.abs(friend.balance)} kenapa kamu
          </p>
        )}
        {friend.balance === 0 && (
          <p>{friend.name} tidak memiliki hutang ke kamu</p>
        )}
        <button className="button" onClick={() => onSelected(friend)}>
          {isSelected ? "Tutup" : "pilih"}
        </button>
      </li>
    </div>
  );
};

export default Friend;
