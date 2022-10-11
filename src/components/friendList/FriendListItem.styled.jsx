import styled from '@emotion/styled';

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
