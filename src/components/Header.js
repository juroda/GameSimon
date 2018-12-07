import styled from 'styled-components';
import { withReflex } from 'reflexbox';

const Header = withReflex()(styled.div`
  top: 0;
  left: 0;
  color: #fff;
  width: 100%;
  position: absolute;
`);

export default Header;
