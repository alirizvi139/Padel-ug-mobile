import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ShareIconProps {
  size?: number;
  color?: string;
}

const ShareIcon: React.FC<ShareIconProps> = ({ 
  size = 20, 
  color = '#FFFFFF' 
}) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Three circles connected by lines - simplified share icon */}
      <View style={[styles.circle, { backgroundColor: color, left: 0, top: 0 }]} />
      <View style={[styles.circle, { backgroundColor: color, right: 0, top: 0 }]} />
      <View style={[styles.circle, { backgroundColor: color, left: size/2 - 2, bottom: 0 }]} />
      
      {/* Connecting lines */}
      <View style={[styles.line, { backgroundColor: color, left: 4, top: 4, width: size - 8, height: 1 }]} />
      <View style={[styles.line, { backgroundColor: color, left: size/2 - 0.5, top: 4, width: 1, height: size - 8 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  line: {
    position: 'absolute',
  },
});

export default ShareIcon; 