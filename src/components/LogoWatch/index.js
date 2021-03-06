import styled from "styled-components";
import logo from '../../assets/img/logo.png'

const LogoWatch = styled.img.attrs({src: logo, alt: "Logo Watchflix"})`
    height: 40rem;

    @media(max-width: 600px) {
        height: 34rem;
    }
`
export default LogoWatch