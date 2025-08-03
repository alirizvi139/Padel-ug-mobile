import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import ShareIcon from '../assets/images/ShareIcon.png';

interface HeaderProps {
  title: string;
  onSharePress?: () => void;
  showShareIcon?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  onSharePress, 
  showShareIcon = true 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showShareIcon && (
        <TouchableOpacity 
          style={styles.shareButton} 
          onPress={onSharePress}
        >
          <Image source={ShareIcon} style={styles.shareIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a001f',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#150e2a',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'System',
  },
  shareButton: {
    padding: 4,
  },
  shareIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
});

export default Header; 