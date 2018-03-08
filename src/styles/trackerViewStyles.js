import styled from 'styled-components';

export const TrackersContainer = styled.View`
  border-top-width: 1px;
  border-color: #50565B;
`;

export const TrackerContainer = styled.ScrollView`
  border-bottom-width: 2px;
  border-color: #50565B;
  width: 100%;
`;

export const TrackerLeftContainer = styled.View`
  flex: 0.85;
  background-color: #BCC8E5;
  border-right-width: 1px;
  border-color: #50565B;

`;

export const TrackerCenterContainer = styled.View`
  flex: 0.05;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
`;
export const TrackerRightContainer = styled.View`
  flex: 0.15;
  background-color: yellow;
  flex-direction: column;
`;
