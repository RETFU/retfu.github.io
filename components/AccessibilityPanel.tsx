import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';
import useDarkMode from '../style/useDarkMode';

const Container = styled.div`
  position: fixed;
  right: 1em;
  top: 1em;
`;

const AccessibilityPanel = () => {
  return <></>;
  const darkMode = useDarkMode();
  return (
    <Container>
      <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        checked={darkMode.mode === 'dark'}
        onChange={darkMode.toggle}
        size={40}
        moonColor="black"
      />
    </Container>
  );
};

export default AccessibilityPanel;
