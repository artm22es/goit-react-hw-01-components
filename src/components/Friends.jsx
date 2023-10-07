import css from './Friends.styles.module.css';

export const Friends = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className={css.friendsList}>
        {friends.map(({ avatar, id, name, isOnline }) => {
          return (
            <li key={id} className={css.item}>
              <span
                style={{ backgroundColor: isOnline ? 'green' : 'red' }}
                className={css.status}
              ></span>
              <img
                className={css.avatarFriend}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};