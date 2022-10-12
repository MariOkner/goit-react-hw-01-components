import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ContainerList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ContainerList>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ContainerList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
