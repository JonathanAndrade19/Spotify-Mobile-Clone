import React from 'react';
import colors from '../../styles/colors';

import { AntDesign } from '@expo/vector-icons';
import { Container, RightSide, Button} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <RightSide>
          <Button>
            <AntDesign name="setting" size={26} color={colors.black} />
          </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
