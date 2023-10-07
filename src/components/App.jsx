import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { Friends } from './Friends';
import { Transactions } from './Transactions';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import data from '../data/data.json'

export function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}