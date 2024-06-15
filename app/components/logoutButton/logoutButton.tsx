import { Button } from '@chakra-ui/react';
import { FC } from 'react';

interface LogoutButtonProps {
  onLogout: () => Promise<void>;
}

const LogoutButton: FC<LogoutButtonProps> = ({ onLogout }) => {
  return (
    <Button colorScheme="red" onClick={onLogout}>
      Sign Out
    </Button>
  );
};

export default LogoutButton;