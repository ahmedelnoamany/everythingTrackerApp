import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const SidebarStyles = StyleSheet.create({
  SidebarButton: {
    backgroundColor: '#3F3F3F',
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: 0,
    flexDirection: 'row',
  },
  SidebarButtonText: {
    fontSize: 12,
    color: '#E9EBF8',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export const SidebarContainer = styled.View`
  flex: 0.3;
  height: 100%;
  background-color: #FCFCFC;
  border-color: #50565B;
  shadow-color: black;
  shadow-radius: 10;
  shadow-opacity: 0.3;
  shadow-offset: 0px 20px;

`;

export const SidebarContent = styled.View`
  flex-direction: column;
  height: 100%;
`;
export const SidebarUpper = styled.View`
  flex: 0.5;
  justify-content: flex-start;
  margin-top: 10%;
`;
export const SidebarLower = styled.View`
  justify-content: flex-end;
  padding: 5px;
  flex: 0.5;
`;

export const ButtonTextStyle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #343A3F;
`;
