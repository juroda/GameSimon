import styled from 'styled-components';
import { colors } from '../constants';

const Score = styled.div`
  
  top: 0;
  left: 0;
  right: 0; 
  bottom: 0;
  z-index: 2;
  padding: 5px;
  width: 120px;
  margin: auto;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  line-height: 120px;
  text-align: center;
  text-align: center;
  background-color: ${colors.white};
  font-size: ${props => props.length <= 2 ? '62px' : '45px'};
  
  box-shadow: 0 0 15px rgba(0, 0, 0, .8);
`;

export default Score;
