import styled from 'styled-components';

export const SidebarContainer = styled.View`
  flex: 0.3;
  background-color: #93B4D8;
  border-right-width: 2px;
  border-color: #50565B;
`;

export const SidebarContent = styled.View`
  flex-direction: column;
  height: 100%;
`;
export const SidebarUpper = styled.View`
  flex: 0.5;
  margin-top: 20%;
  border-top-width: 2px;
  border-color: #50565B;
`;
export const SidebarLower = styled.View`
  justify-content: flex-end;
  padding: 5px;
  flex: 0.5;
`;
export const SidebarButton = styled.TouchableOpacity`
  border-color: #50565B;
  border-bottom-width: 2px;
  align-items: center;
  height: 15%;
  padding: 2px;
  justify-content: center;
`;

export const ButtonTextStyle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #343A3F;
`;
