import styled from "styled-components"
import ButtonWatch from "../ButtonWatch"


const HeaderWatch = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px 40px;
    background-color: var(--color-gray-dark);
    border-bottom: 6px solid var(--color-primary);

    /* MOBILE */
    @media(max-width: 600px) {
        justify-content: center;
        padding: 14px 20px;

        /* Filho direto do elemento pai(header) */
        & > ${ButtonWatch} {
            background-color: var(--color-primary);
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }

`

export default HeaderWatch