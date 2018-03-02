import styled from 'styled-components';
import {
  View,
  ScrollView
} from 'react-native';

export const TrackersContainer = styled.ScrollView`
  flex: 0.7;
  border-top-width: 3px;
  border-color: #011035;
`;
export const TrackerContainer = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-width: 2px;
  border-color: black;
`;

export const TrackerLeftContainer = styled.View`
  flex: 0.75;
  align-items: center;
  background-color: white;
  border-right-width: 1px;

`;

export const TrackerCenterContainer = styled.View`
  flex: 0.25;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  width: 100%;
`;
export const TrackerRightContainer = styled.View`
  flex: 0.25;
  ${'' /* align-items: center; */}
  ${'' /* justify-content: center; */}
`;
