import { Profile } from 'components/Profile/Profile';
import { Container } from 'components/Profile/Profile.styled';
import { Statistics } from 'components/Statistics/Statistics';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </Container>
  );
};
