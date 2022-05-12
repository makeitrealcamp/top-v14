import { useQuery, gql } from '@apollo/client';

interface User {
  id: String;
  name: String;
  rocket: String;
  timestamp: string;
  twitter: String;
}

interface UsersQuery {
  users: User[];
}

const USERS_QUERY = gql`
  query SpaceXUsers {
    users {
      id
      name
      rocket
    }
  }
`;

export const Users = () => {
  const { loading, data } = useQuery<UsersQuery>(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      {data?.users.map((user: any) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          {user.rocket && <p>{user.rocket}</p>}
        </div>
      ))}
    </>
  );
};
