import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import FeaturedItem from '../components/FeaturedItem';
import ItemCard from '../components/ItemCard';
import BottomNavigation from '../components/BottomNavigation';
import UserProfileDrawer from '../components/UserProfileDrawer';
import { getApiCall } from '../services/api';
import { ENDPOINTS } from '../config/api';

// const users = [
//   {
//     id: 1,
//     name: 'Milo Grant',
//     profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
//     points: 1650,
//     rank: 7,
//     highlight: true,
//     attack: { pistol: 2, bomb: 1, dynamite: 1 },
//     haveBadge: true,
//   },
//   {
//     id: 2,
//     name: 'Milo Grant',
//     profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
//     points: 1650,
//     rank: 7,
//     highlight: true,
//     attack: { pistol: 2, bomb: 1, dynamite: 1 },
//     haveBadge: true,
//   },
//   {
//     id: 3,
//     name: 'Milo Grant',
//     profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
//     points: 1650,
//     rank: 7,
//     highlight: true,
//     attack: { pistol: 2, bomb: 1, dynamite: 1 },
//     haveBadge: true,
//   },
//   {
//     id: 4,
//     name: 'Milo Grant',
//     profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
//     points: 1650,
//     rank: 7,
//     highlight: true,
//     attack: { pistol: 2, bomb: 1, dynamite: 1 },
//     haveBadge: true,
//   },
// ];

const AchievementIcons = ({ attack }: any) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
    <Text>🚀x{attack.rocket}</Text>
    <Text>🌍x{attack.globe}</Text>
    <Text>✏️x{attack.pistol}</Text>
  </View>
);

const LeaderboardScreen = () => {
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);
  const [users, setUsers] = React.useState<any[]>([]);
  const [selectedUser, setSelectedUser] = React.useState(users[0]);

  const handleUserPress = (user: any) => {
    setSelectedUser(user);
    setIsDrawerVisible(true);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    console.log('fetching users');
    try {
      const response = await fetch('https://ccba3d4cd573.ngrok-free.app/api/users/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const users = await response.json();
      console.log('users ', users);
      setUsers(users?.data);
    } catch (error) {
      console.log('error ', error);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header
          title="Leaderboard"
          onSharePress={() => console.log('Share pressed')}
        />
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Highlighted user */}
          <TouchableOpacity onPress={() => handleUserPress(users[0])}>
            <FeaturedItem
              rank={users[0]?.rank || ""}
              name={users[0]?.name}
              avatar={users[0]?.profile_image}
              points={users[0]?.points}
              achievements={{
                pistol: users[0]?.attack?.pistol,
                bomb: users[0]?.attack?.bomb,
                dynamite: users[0]?.attack?.dynamite,
              }}
              isHighlighted={true}
            />
          </TouchableOpacity>
          {/* Other users */}
          {users?.map((user, idx) => (
            <TouchableOpacity
              key={user.id}
              onPress={() => handleUserPress(user)}
            >
              <ItemCard
                rank={user?.rank}
                name={user?.name}
                avatar={user?.profile_image}
                points={user?.points}
                achievements={{
                  pistol: user?.attack?.pistol,
                  bomb: user?.attack?.bomb,
                  dynamite: user?.attack?.dynamite,
                }}
                trend={idx % 2 === 0 ? 'up' : 'down'}
                haveBadge={false}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* Bottom Navigation */}
        <BottomNavigation
          activeTab="leaderboard"
          onTabPress={tabId => console.log('Tab pressed:', tabId)}
        />

        {/* User Profile Drawer */}
        <UserProfileDrawer
          visible={isDrawerVisible}
          onClose={() => setIsDrawerVisible(false)}
          onAttack={() => console.log('Attack pressed for:', selectedUser?.name)}
          user={{
            name: selectedUser?.name,
            avatar: selectedUser?.profile_image,
            points: selectedUser?.points,
            achievements: {
              pistol: selectedUser?.attack?.pistol,
              bomb: selectedUser?.attack?.bomb,
              dynamite: selectedUser?.attack?.dynamite,
              shield: 3, // Default value
            },
            stats: {
              hits: 32,
              inventory: '4 Bags',
              extras: 4,
              status: 'Ripple',
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a001f',
  },
  container: {
    flex: 1,
    backgroundColor: '#0a001f',
    position: 'relative',
  },
  header: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 16,
  },
  shareIcon: {
    position: 'absolute',
    right: 24,
    top: 28,
    zIndex: 2,
  },
  highlightedUserBox: {
    backgroundColor: '#7B3AF5',
    borderRadius: 16,
    marginHorizontal: 12,
    marginBottom: 16,
    padding: 12,
    marginTop: 8,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rankHighlight: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    width: 24,
    textAlign: 'center',
  },
  avatarLarge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginHorizontal: 8,
  },
  nameHighlight: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  pointsHighlightBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginLeft: 8,
  },
  pointsHighlightText: {
    color: '#7B3AF5',
    fontWeight: 'bold',
    fontSize: 15,
  },
  userListRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginHorizontal: 12,
    marginBottom: 8,
    padding: 10,
    borderRadius: 12,
  },
  rank: {
    color: '#7B3AF5',
    fontWeight: 'bold',
    fontSize: 18,
    width: 24,
    textAlign: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 8,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  pointsBox: {
    backgroundColor: '#2A1B4A',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginLeft: 8,
  },
  pointsText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: '#18102A',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#2A1B4A',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    zIndex: 10,
  },
});

export default LeaderboardScreen;
