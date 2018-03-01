import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import styled from 'styled-components';

export const SidebarContainer = styled.View`
  flex: 0.3;
  background-color: #4D66A0;
  border-right-width: 2px;
  border-color: #011035;

`;

export const SidebarContent = styled.View`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const SidebarUpper = styled.View`
  flex: 0.5;
  padding: 5px;
  justify-content: space-between;
`;
export const SidebarLower = styled.View`
  justify-content: flex-end;
  padding: 5px;
  flex: 0.5;
`;
export const SidebarButton = styled.TouchableOpacity`
  background-color: #BCC8E5;
  border: 2px solid #011035;
  align-items: center;
  border-radius: 25px;
`;

export const ButtonTextStyle = styled.Text`
  font-size: 18px;
  text-align: center;
`
