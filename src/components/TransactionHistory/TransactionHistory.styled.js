import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 50%;
  margin: 20px auto;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  border-collapse: collapse;
`;
export const TransactionHead = styled.thead`
  line-height: 40px;
  background-color: #6de3f7;
  color: white;
  text-transform: uppercase;
`;
export const TransactionBody = styled.tbody`
  line-height: 40px;
  color: #6f7275;
  background-color: white;
  tr: nth-child(odd) {
    background-color: #d5dce6;
  }
`;

export const TransactionType = styled.td`
  text-transform: capitalize;
`;

//   &:nth-of-type(-n + 18)
