import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;

  padding: 7px 15px;
  :not(:last-child) {
    margin-bottom: 10px;
  }

  background-color: pink;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;

  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const AvatarImg = styled.img`
  width: 50px;
  padding: 10px;
  margin-left: 10px;

  border-radius: 10%;
  background-color: white;
`;

export const Name = styled.p`
  margin-left: 10px;

  font-size: 25px;
  font-weight: 600;
`;
