import styled from "styled-components"

const ButtonWatch = styled.button `
    padding: 16rem 32rem;
    background-color: var(--color-gray-dark);
    border: 1px solid var(--color-primary);
    color: var(--color-white);
    border-radius: 5px;
    font-size: 18rem;
    font-weight: bolder;
    cursor: pointer;

    &:hover {
        background-color: var(--color-primary);
    }
`

export default ButtonWatch