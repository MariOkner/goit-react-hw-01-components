import styled from '@emotion/styled';

export const ContainerList = styled.ul`
  // margin: 20px 30px;
  position: fixed;
  top: 5%;
  left: 41%;
  list-style: none;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;

  width: 400px;
  padding: 10px 20px;
  :not(:last-child) {
    margin-bottom: 15px;
  }

  background-color: pink;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
