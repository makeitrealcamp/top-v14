import { useQuery, gql } from '@apollo/client';
import { Mission, MissionFind, MissionList, Payload } from './missions.types';

const GET_MISSIONS = gql`
  query GetMissions($find: MissionsFind) {
    missions(find: $find) {
      id
      description
      manufacturers
      payloads {
        id
        manufacturer
      }
    }
  }
`;

export const Missions = () => {
  const { loading, data } = useQuery<MissionList, MissionFind>(
    GET_MISSIONS,
    {}
  );
  console.log(data);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {data!.missions?.map((mission: Mission) => (
        <div key={mission.id}>
          <h1>{mission.name}</h1>
          <h4>{mission.description}</h4>
          {/* {mission.payloads.length > 0 &&
            mission.payloads.map((payload: Payload) => (
              <div key={payload.id}>
                <h2>{payload?.manufacturer}</h2>
              </div>
            ))} */}
        </div>
      ))}
    </div>
  );
};
