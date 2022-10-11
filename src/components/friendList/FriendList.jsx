import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ContainerList, FriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ContainerList>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendItem>
      ))}
    </ContainerList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
