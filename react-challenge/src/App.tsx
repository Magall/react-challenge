
import { styled } from 'styled-components'
import { useState } from 'react'
import { PrimaryButton } from './components/Core/Buttons'
import { InputText } from './components/Core/Inputs'
import { CenteredVertical, Horizontal } from './components/Core/Grids'
import { COLORS } from './constants'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { calculateElementsAcronym } from './store/names.slice'
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

const CharsContainer = styled(Horizontal)`
  padding-top:8px;
  padding-bottom:8px;
`;
function App() {
  const dispatch = useAppDispatch();
  const firstNameElements = useAppSelector(state => state.names.firstNameCalculated);
  const lastNameElements = useAppSelector(state => state.names.lastNameCalculated);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const handleNames = () => {
    dispatch(calculateElementsAcronym({ firstName, lastName }))

  }

  const renderNames = () => {
    let greenClassHandler = '';
    const charToUnderlineFirstName = firstNameElements;
    const charToUnderlineLastName = lastNameElements;
    const charsFirstName = firstName.split('').map((el, i) => {
      greenClassHandler = charToUnderlineFirstName.includes(i) ? 'green' : ''
      return <span key={i} className={greenClassHandler}>{el}</span>
    })
    const charsLastName = lastName.split('').map((el, i) => {
      greenClassHandler = charToUnderlineLastName.includes(i) ? 'green' : ''
      return <span key={i} className={greenClassHandler}>{el}</span>
    })

    return (
      <CenteredVertical>
        <CharsContainer>
          {charsFirstName}
        </CharsContainer>
        <CharsContainer>
          {charsLastName}
        </CharsContainer>
      </CenteredVertical>
    )
  }


  return (
    <div>
      <Banner>
        <FullName>
          <Horizontal>
            {renderNames()}
          </Horizontal>
        </FullName>
        <Horizontal>
          <InputText label='First Name' name='firstName' onChangeText={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
          <InputText label='Last Name' name='lastName' onChangeText={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} />
        </Horizontal>
        <PrimaryButton onClick={() => handleNames()}>Breakfy</PrimaryButton>
      </Banner>
    </div>
  )
}


export default App
