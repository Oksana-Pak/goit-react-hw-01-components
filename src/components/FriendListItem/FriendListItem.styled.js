import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  padding: 0 20px;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
export const FriendAvatar = styled.img``;
export const FriendName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
