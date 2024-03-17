import FriendListItem from "../friendListItem/FriendListItem";
import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, id, isOnline, name }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
};

export default FriendList;
