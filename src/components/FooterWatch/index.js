import styled from 'styled-components'
import LogoWatch from '../LogoWatch'

const FooterWatch = styled.footer `
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20rem;
    font-size: 16rem;
    background-color: var(--color-gray-dark);
    color: var(--color-white);
    border-top: 5px solid var(--color-primary);

    & > ${LogoWatch} {
        margin-bottom: 10rem;
    }

`

export default FooterWatch