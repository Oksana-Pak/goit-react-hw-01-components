import styled from 'styled-components';

export const Section = styled.section`
  width: 30%;
  margin: 30px auto 0;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
`;
export const Title = styled.h2`
  margin: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  text-transform: uppercase;
  color: #6f7275;
`;
export const StatsList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
  border-top: 1px solid #d5dce6;

  font-size: 18px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;
export const StatsLabel = styled.span``;
export const StatsPercentage = styled.span`
  margin-top: 10px;
  font-size: 20px;
`;
