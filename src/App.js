import React from 'react';
import HeaderWatch from './components/HeaderWatch';
import LogoWatch from './components/LogoWatch';
import ButtonWatch from './components/ButtonWatch';
import FooterWatch from './components/FooterWatch';
import LinkWatch from './components/LinkWatch';
import HighlightWatch from './components/HighlightWatch';


function App() {
  return (
    <>
    <HeaderWatch>
      <LogoWatch />
      <ButtonWatch>Novo Video</ButtonWatch>
    </HeaderWatch>
    <FooterWatch>
      <LogoWatch/>
      <p>Site feito na <HighlightWatch>#ImersãoReact</HighlightWatch> da <LinkWatch href="https://www.alura.com.br/" target="_blank">Alura</LinkWatch></p>
    </FooterWatch>
    </>
  );
}

export default App;
