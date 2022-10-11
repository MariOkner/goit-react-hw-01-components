import styled from '@emotion/styled';

export const Status = styled.span`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const AvatarImg = styled.img`
  width: 80px;
  padding: 10px;
  margin-left: 20px;

  border-radius: 10%;
  background-color: white;
`;

export const Name = styled.p`
  margin-left: 20px;

  font-size: 30px;
  font-weight: 600;
`;
