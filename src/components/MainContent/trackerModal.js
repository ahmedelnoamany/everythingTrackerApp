import React from 'react';
import {
  Modal,
  Text,
  View,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';

const TrackerModal = props => (
  <Modal
    visible={props.modalVisible}
    animationType='slide'
    transparent
  >
    <View
      style={{ flex: 1, backgroundColor: '#FEFFFE', marginTop: 80 }}
    >
      <View style={{
        flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5,
      }}
      >
        <View>
          <Text>
            {props.currentTracker.name}
          </Text>
        </View>
        <View>
          <Button
            onPress={() => props.onModalClose(false)}
            title='X'
          />
        </View>
      </View>
      <View style={{ flex: 0.9, backgroundColor: 'FEFFFE' }} />
    </View>
  </Modal>
);

TrackerModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  currentTracker: PropTypes.object.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default TrackerModal;
