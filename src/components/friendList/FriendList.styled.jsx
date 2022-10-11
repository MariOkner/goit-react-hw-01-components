import styled from '@emotion/styled';

export const ContainerList = styled.ul`
  width: 300px;
  // position: fixed;
  // top: 5%;
  // left: 41%;
  list-style: none;
`;

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
