import styles from "./Profile.module.css"
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profileContainer}>
    <div className={styles.profileInfo}>
      <img src={image} alt={name} className={styles.profileImage} />
      <p className={styles.profileName}>{name}</p>
      <p className={styles.profileTag}>@{tag}</p>
      <p className={styles.profileLocation}>{location}</p>
    </div>

    <ul className={styles.statsList}>
      <li className={styles.statItem}>
        <span className={styles.statLabel}>Followers</span>
        <span className={styles.statValue}> {followers}</span>
      </li>
      <li className={styles.statItem}>
        <span className={styles.statLabel}>Views</span>
        <span className={styles.statValue}> {views}</span>
      </li>
      <li className={styles.statItem}>
        <span className={styles.statLabel}>Likes</span>
        <span className={styles.statValue}> {likes}</span>
      </li>
    </ul>
  </div>
);
};

export default Profile;
