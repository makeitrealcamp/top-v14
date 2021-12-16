import styled, { css } from "styled-components";

const Paragraph = styled.p`
    font-weight: 400;
    margin: 0px 0px 2px;
    ${props => {
        const typeStyles = handleType(props.type);
        return css`${typeStyles}`;
    }}
`;

const handleType = (type) => {
    if (type === 'caption') {
        return `
            font-size: 12px;
            line-height: 1.6;
            letter-spacing: 0.5px;
            color: #a19e9d
        `
    } else {
        return `
            font-size: 14px;
            line-height: 1.4;
            letter-spacing: 0.2px;
            color: black;
        `
    }
};

export default Paragraph;