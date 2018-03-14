import styled from 'styled-components';

export const TrackersContainer = styled.View`
  border-top-width: 1px;
  border-color: #50565B;
`;

export const TrackerContainer = styled.ScrollView`
  border-bottom-width: 2px;
  border-color: #FCFCFC;
  width: 100%;
  height: 100%;
`;

export const TrackerLeftContainer = styled.View`
  flex: 0.8;
  background-color: #FCFCFC;
  border-color: #50565B;
  height: 100%;

`;

export const TrackerCenterContainer = styled.View`
  flex: 0.05;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  height: 100%;
`;
export const TrackerRightContainer = styled.View`
  flex: 0.2;
  background-color: yellow;
  flex-direction: column;
`;
