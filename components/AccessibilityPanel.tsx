import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';
import { ThemeMode } from '../style/Theme';

const Container = styled.div`
  position: fixed;
  right: 1em;
  top: 1em;
`;

type AccessibilityPanelProps = {
  onChange: () => void;
  themeMode: ThemeMode;
};

const AccessibilityPanel = ({
  onChange,
  themeMode,
}: AccessibilityPanelProps) => {
  return (
    <Container>
      <DarkModeSwitch
        checked={themeMode === ThemeMode.dark}
        onChange={onChange}
        size={40}
        data-testid="switch"
      />
    </Container>
  );
};

export default AccessibilityPanel;
