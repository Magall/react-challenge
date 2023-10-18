
import { styled } from 'styled-components'
import { useState } from 'react'
import { PrimaryButton } from './components/Core/Buttons'
import { InputText } from './components/Core/Inputs'
import { CenteredVertical, Horizontal } from './components/Core/Grids'
import { COLORS } from './constants'
import './App.css'

function App() {
  const [firstName,setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const FullName = styled(CenteredVertical)`
    font-size: 48px;
    margin-bottom:16px;
`;

  const Banner = styled(CenteredVertical)`
    min-width: 300px;
    background: ${COLORS.dark};
    color: ${COLORS.light};
    padding:24px;

`;


  return (
    <div>
      <Banner>
        <FullName>
          <span>Rafael</span>
          <span>Gomes</span>
        </FullName>
        <Horizontal>
          <InputText label='First Name' name='firstName' onChangeText={() => { }} />
          <InputText label='Last Name' name='lastName' onChangeText={() => { }} />
        </Horizontal>
        <PrimaryButton>Breakfy</PrimaryButton>
      </Banner>
    </div>
  )
}

export default App
