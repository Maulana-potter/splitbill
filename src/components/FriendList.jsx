import Friend from "./Friend";

const FriendList = ({ friends, onSelected, selectedFriend }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelected={onSelected}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
