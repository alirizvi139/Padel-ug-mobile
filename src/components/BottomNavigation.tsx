import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from 'react-native';
import HomeIcon from '../assets/images/HomeIcon.png';
import GamesIcon from '../assets/images/GameIcon.png';
import LeaderboardIcon from '../assets/images/LeaderbordIcon.png';
import ProfileIcon from '../assets/images/ProfileIcon.png';

interface NavItem {
  id: string;
  label: string;
  icon: ImageSourcePropType;
}

interface BottomNavigationProps {
  activeTab: string;
  onTabPress: (tabId: string) => void;
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: HomeIcon,
  },
  {
    id: 'games',
    label: 'Games',
    icon: GamesIcon,
  },
  {
    id: 'leaderboard',
    label: 'Leaderboard',
    icon: LeaderboardIcon,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: ProfileIcon,
  },
];

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.navItem}
            onPress={() => onTabPress(item.id)}
          >
            <Image
              style={[
                styles.navIcon,
                // isActive && styles.navIconActive,
              ]}
              source={item.icon}
            />
            <Text
              style={[
                styles.navLabel,
                isActive && styles.navLabelActive,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: '#09001f',
    flexDirection: 'row',
    // borderTopWidth: 1,
    // borderTopColor: '#2A1B4A',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    zIndex: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  navIcon: {
    fontSize: 24,
    color: '#666666',
    marginBottom: 4,
  },
  navLabel: {
    color: '#666666',
    fontSize: 12,
    fontWeight: '400',
  },
  navIconActive: {
    color: '#00FFB2',
    fontSize: 26,
  },
  navLabelActive: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default BottomNavigation; 