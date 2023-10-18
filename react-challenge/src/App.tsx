
import { styled } from 'styled-components'
import { ChangeEvent, useState } from 'react'
import { PrimaryButton } from './components/Core/Buttons'
import { InputText } from './components/Core/Inputs'
import { CenteredVertical, Horizontal } from './components/Core/Grids'
import { COLORS, ELEMENTS } from './constants'
import './App.css'

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
function App() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [firstNameGreen, setFirstNameGreen] = useState<Array<any>>([])

  const findElements = (): Array<number> => {
    const resp = []
    let currentSearchTerm = '';
    let index = 0;
    while (index < firstName.length) {
      currentSearchTerm = firstName.charAt(index) + firstName.charAt(index + 1);
      if (ELEMENTS.includes(currentSearchTerm.toLocaleLowerCase())) {
        resp.push(...[index, index + 1])
        index += 2;
      }
      else {
        index += 2;
      }
    }
    return resp;
  }

  const checkNames = () => {
    let greenClassHandler = ''
    const charToUnderline = findElements();
    const chars = firstName.split('').map((el, i) => {
      greenClassHandler = charToUnderline.includes(i) ? 'green' : ''
      return <span key={i} className={greenClassHandler}>{el}</span>
    })
    setFirstNameGreen(chars)
  }




  return (
    <div>
      <Banner>
        <FullName>
          <Horizontal>
            {firstNameGreen}
          </Horizontal>
        </FullName>
        <Horizontal>
          <InputText label='First Name' name='firstName' onChangeText={(e:ChangeEvent) => setFirstName(e.target.value)} />
          <InputText label='Last Name' name='lastName' onChangeText={(e:ChangeEvent) => setLastName(e.target.value)} />
        </Horizontal>
        <PrimaryButton onClick={() => checkNames()}>Breakfy</PrimaryButton>
      </Banner>
    </div>
  )
}


export default App
