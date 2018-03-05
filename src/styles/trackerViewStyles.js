import styled from 'styled-components';
import {
  View,
  ScrollView
} from 'react-native';

export const TrackersContainer = styled.View`
  border-top-width: 1px;
  border-color: #50565B;
`;

export const TrackerContainer = styled.ScrollView`
  border-bottom-width: 2px;
  border-color: #50565B;
`;

export const TrackerLeftContainer = styled.View`
  flex: 0.75;
  align-items: center;
  background-color: #BCC8E5;
  border-right-width: 1px;
  border-color: #50565B;

`;

export const TrackerCenterContainer = styled.View`
  flex: 0.25;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
`;
export const TrackerRightContainer = styled.View`
  flex: 0.25;
  flex-direction: column;
  ${'' /* align-items: center; */}
  ${'' /* justify-content: center; */}
`;
