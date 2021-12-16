import { useEffect, useState } from "react";
import styled from 'styled-components';
import Avatar from './shared/Avatar';
import Paragraph from "./shared/Paragraph";

const StyledList = styled.ul`
    list-style-type: none;
    width: 400px;
    padding: 0;
`

const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 10px;
    transition: background-color 0.5s;
    &:hover {
        background-color: bisque;
    }
`

const UserInfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 10px;
`

const List = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            setUsers(data.results);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <>
            <StyledList>
                {users.map(user => (
                    <StyledListItem key={user.login?.uuid}>
                        <Avatar type='circular' src={user.picture?.large} />
                        <UserInfo>
                            <Paragraph>
                                {`${user.name?.title} ${user.name?.first} ${user.name?.last}`}
                            </Paragraph>
                            <Paragraph type="caption">
                                {`${user.location?.city} ${user.location?.country}`}
                            </Paragraph>
                        </UserInfo>
                    </StyledListItem>
                ))}
            </StyledList>
            <StyledList>
                {users.map(user => (
                    <StyledListItem key={user.login?.uuid}>
                        <Avatar type='circular' src={user.picture?.large} />
                        <UserInfo>
                            <Paragraph>
                                {`${user.name?.title} ${user.name?.first} ${user.name?.last}`}
                            </Paragraph>
                            <Paragraph type="caption">
                                {`${user.location?.city} ${user.location?.country}`}
                            </Paragraph>
                        </UserInfo>
                    </StyledListItem>
                ))}
            </StyledList>
        </>
    );
}

export default List;
