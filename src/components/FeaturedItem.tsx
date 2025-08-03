import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

interface FeaturedItemProps {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  achievements: {
    pistol: number;
    bomb: number;
    dynamite: number;
  };
  isHighlighted?: boolean;
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({
  rank,
  name,
  avatar,
  points,
  achievements,
  isHighlighted = false,
}) => {
  return (
    <View style={[styles.container, isHighlighted && styles.highlightedContainer]}>
      {/* Rank and Trend */}
      <View style={styles.rankContainer}>
        <Text style={styles.rank}>{rank}</Text>
        <View style={styles.trendIndicator}>
          <Text style={styles.trendArrow}>▼</Text>
        </View>
      </View>

      {/* Profile Picture */}
      <Image source={{ uri: avatar }} style={styles.avatar} />

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
    backgroundColor: '#7B3AF5',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
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
  highlightedContainer: {
    backgroundColor: '#7B3AF5',
  },
  rankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    minWidth: 30,
  },
  rank: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 4,
  },
  trendIndicator: {
    marginLeft: 2,
  },
  trendArrow: {
    color: '#FF4444',
    fontSize: 12,
    fontWeight: 'bold',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
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
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minWidth: 80,
    alignItems: 'center',
  },
  pointsText: {
    color: '#7B3AF5',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FeaturedItem; 