import styled from '@emotion/styled';

export const Container = styled.section`
  width: 400px;
  height: 100%;
  // position: absolute;
  // top: 5%;
  // left: 19%;
  // transform: translate(-50%, -50%);

  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 600;
  padding: 50px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #808080;
`;

export const StatItem = styled.li`
  display: flex;
  align-item: center;
  flex-direction: column;
  padding: 20px 10px;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 1px 1px 2px black;
`;

export const Percentage = styled.span`
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  text-shadow: 1px 1px 2px black;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
