import React, { Component } from 'react';
import {
  Modal,
  Text,
  View,
  Button,
} from 'react-native';

const TrackerModal = props => (
  <Modal
    visible={props.modalVisible}
    animationType={'slide'}
  >
    <View>
        <Text>
            {props.currentTracker.name}
        </Text>
        <Button
        onPress={() => props.onModalClose(false)}
        title='back'
        />
    </View>
  </Modal>
);

export default TrackerModal;
