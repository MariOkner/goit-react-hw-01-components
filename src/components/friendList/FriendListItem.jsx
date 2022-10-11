import PropTypes from 'prop-types';
import { Status, AvatarImg, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  // console.log(isOnline);
  return (
    <>
      <Status status={isOnline}></Status>
      <AvatarImg src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
