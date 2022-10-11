import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  position: fixed;
  top: 5%;
  left: 58%;

  width: 500px;

  border-collapse: collapse;
  border-spacing: 5;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
  // border-radius: 5px;
  // margin-bottom: 40px;
  font-size: 16px;
`;

export const TableHead = styled.tr`
  text-align: center;
  text-transform: uppercase;

  color: white;
  background-color: #00ced1;

  th {
    padding: 20px 100px;

    :not(:last-child) {
      border-right: 1px solid white;
    }
  }
`;

export const TableItem = styled.tr`
  text-align: center;

  color: #778899;
  background-color: white;

  &:nth-of-type(2n) {
    background-color: #add8e6;
  }

  td {
    padding: 15px 15px;

    :not(:last-child) {
      border-right: 1px solid #b0c4de;
    }
  }
`;
