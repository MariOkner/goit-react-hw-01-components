import styled from '@emotion/styled';

export const Container = styled.div`
  width: 350px;
  height: 100%;
  // margin: 15px 10px;
  // position: fixed;
  // top: 5%;
  // left: 2%;
  // // transform: translate(-50%, -50%);

  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`;

export const Description = styled.div`
  text-align: center;
  margin: 20px 60px;
`;

export const AvatarImg = styled.img`
  width: 100%;
  margin-bottom: 50px;
  border-radius: 50%;
  background-color: gray;
`;
// export const At = styled.icon`
//   display: inline;
// `;

export const NameTitle = styled.p`
  margin: 0 0 15px 0;
  font-size: 32px;
  font-weight: 600;
`;

export const UserInfo = styled.p`
  margin: 0 0 15px 0;
  font-size: 20px;
  color: #808080;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #808080;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 15px;
  width: 100%;
  background-color: #f0f0f0;
  :not(:last-child) {
    border-right: 1px solid #808080;
  }
`;

export const Label = styled.span`
  margin-bottom: 10px;
  color: #808080;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
