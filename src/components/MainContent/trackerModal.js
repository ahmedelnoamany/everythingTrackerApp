import React from 'react';
import {
  Modal,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const TrackerModal = props => (
  <Modal
    visible={props.modalVisible}
    animationType='slide'
    transparent
  >
    <View
      style={{ flex: 1, backgroundColor: 'black', marginTop: 80, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
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
        <View style={{ paddingRight: '2%' }}>
          <TouchableHighlight onPress={() => props.onModalClose(false)} >
            <Icon name='close' size={30} color='#2B2D42' />
          </TouchableHighlight>
        </View>
      </View>
      <View style={{ flex: 0.9, backgroundColor: '#FEFFFE' }} />
    </View>
  </Modal>
);

TrackerModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  currentTracker: PropTypes.object.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default TrackerModal;
