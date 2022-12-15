import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d5dce6;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const ProfileContainer = styled.div`
  width: 25%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
`;
export const Description = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #fff;
`;
export const Avatar = styled.img`
  width: 40%;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #d5dce6;
`;
export const UserName = styled.p`
  margin: 40px 0px 20px 0px;
  font-size: 26px;
  font-weight: bold;
`;
export const Tag = styled.p`
  margin: 0;
  margin-bottom: 20px;
  color: #6f7275;
  font-size: 20px;
`;
export const Location = styled.p`
  margin: 0;
  color: #6f7275;
  font-size: 20px;
`;
export const Stats = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
  border-top: 1px solid #d5dce6;
  background-color: #f0f2f5;
  font-size: 18px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  border-right: 1px solid #d5dce6;
`;
export const Label = styled.span`
  color: #6f7275;
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
