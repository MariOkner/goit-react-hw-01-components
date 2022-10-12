import PropTypes from 'prop-types';
import { FriendItem, Status, AvatarImg, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  // console.log(isOnline);
  return (
    <FriendItem>
      <Status status={isOnline}></Status>
      <AvatarImg src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
