import styled from 'styled-components';
import { withReflex } from 'reflexbox';

const CenterOverlay = withReflex()(styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  color: #fff;
  margin: auto;
  height: 250px;
  position: absolute;
  text-align: center;
  background-color: rgba(0,0,0,0.9);
`);

export default CenterOverlay;
