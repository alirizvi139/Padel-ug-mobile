import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

interface ItemCardProps {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  achievements: {
    pistol: number;
    bomb: number;
    dynamite: number;
  };
  trend: 'up' | 'down' | 'neutral';
  haveBadge: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({
  rank,
  name,
  avatar,
  points,
  achievements,
  trend = 'neutral',
  haveBadge = false,
}) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return '▲';
      case 'down':
        return '▼';
      default:
        return '';
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return '#00FF00';
      case 'down':
        return '#FF4444';
      default:
        return '#999999';
    }
  };

  return (
    <View style={styles.container}>
      {/* Rank and Trend */}
      <View style={styles.rankContainer}>
        <Text style={styles.rank}>{rank}</Text>
        {trend !== 'neutral' && (
          <View style={styles.trendIndicator}>
            <Text style={[styles.trendArrow, { color: getTrendColor() }]}>
              {getTrendIcon()}
            </Text>
          </View>
        )}
      </View>

      {/* Profile Picture with Border and Shield */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarBorder}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          {haveBadge && <Image source={require('../assets/images/BlueBadge.png')} style={styles.shieldIconImage} />}
        </View>
      </View>

      {/* Name and Achievements */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.achievementsContainer}>
          <Text style={styles.achievement}>🔫×{achievements.pistol}</Text>
          <Text style={styles.achievement}>💣×{achievements.bomb}</Text>
          <Text style={styles.achievement}>🧨×{achievements.dynamite}</Text>
        </View>
      </View>

      {/* Points Badge */}
      <View style={styles.pointsBadge}>
        <Text style={styles.pointsText}>{points?.toLocaleString() || 0} pts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2A1B4A',
  },
  rankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 12,
    minWidth: 30,
  },
  rank: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  trendIndicator: {
    marginLeft: 4,
    marginTop: -2,
  },
  trendArrow: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatarBorder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
    position: 'relative',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  shieldIconImage: {
    position: 'absolute',
    bottom: -10,
    width: 20,
    height: 20,
  },
  infoContainer: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  achievementsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  achievement: {
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 8,
  },
  pointsBadge: {
    backgroundColor: '#2A1B4A',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minWidth: 80,
    alignItems: 'center',
  },
  pointsText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ItemCard; 