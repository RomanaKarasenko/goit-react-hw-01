import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
      <li className={styles.item}>
        <img src={avatar} alt="Avatar" className={styles.friendAvatar} width="48" />
        <p className={styles.friendName}>{name}</p>
        <p className={isOnline ? styles.onlineStatus : styles.offlineStatus}>
                {isOnline ? 'Online' : 'Offline'}</p>
      </li>
  )
};

export default FriendListItem;
