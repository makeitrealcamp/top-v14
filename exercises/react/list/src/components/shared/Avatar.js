import styled from 'styled-components';

const Avatar = styled.img`
    width: 50px;
    border-radius: ${props => props.type === 'circular' ? '50%' : 'none'};
`

export default Avatar;
