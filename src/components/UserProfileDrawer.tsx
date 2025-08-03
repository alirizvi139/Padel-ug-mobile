import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

interface UserProfileDrawerProps {
    visible: boolean;
    onClose: () => void;
    user: {
        name: string;
        avatar: string;
        points: number;
        achievements: {
            pistol: number;
            bomb: number;
            dynamite: number;
            shield: number;
        };
        stats: {
            hits: number;
            inventory: string;
            extras: number;
            status: string;
        };
    };
    onAttack?: () => void;
}

const UserProfileDrawer: React.FC<UserProfileDrawerProps> = ({
    visible,
    onClose,
    user,
    onAttack,
}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <TouchableOpacity
                    style={styles.backdrop}
                    activeOpacity={1}
                    onPress={onClose}
                />
                <View style={styles.container}>
                    {/* Handle */}
                    <View style={styles.handle} />

                    {/* User Profile Section */}
                    <View style={styles.profileSection}>
                        <View style={styles.avatarContainer}>
                            <Image source={{ uri: user?.avatar }} style={styles.avatar} />
                            <View style={styles.starIcon}>
                                <Image source={require('../assets/images/ProfileStarBadge.png')} style={styles.starIconImage} />
                            </View>
                        </View>

                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{user?.name}</Text>
                            <View style={styles.achievementsContainer}>
                                <Text style={styles.achievement}>🔫×{user?.achievements?.pistol}</Text>
                                <Text style={styles.achievement}>💣×{user?.achievements?.bomb}</Text>
                                <Text style={styles.achievement}>🧨×{user?.achievements?.dynamite}</Text>
                                <Text style={styles.achievement}>🛡️×{user?.achievements?.shield}</Text>
                            </View>
                            <Text style={styles.userCode}>OGCode</Text>

                            <View style={styles.badgesContainer}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{user?.points?.toLocaleString() || 0} pts</Text>
                                </View>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>⭐ Gold</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Stats Section */}
                    <View style={styles.statsSection}>
                        <View style={styles.sectionTitleContainer}>
                            <Text style={styles.sectionTitle}>Overview</Text>
                        </View>
                        <View style={styles.underline} />

                        <View style={styles.statsList}>
                            <View style={styles.statRow}>
                                <Text style={styles.statLabel}>Hits</Text>
                                <Text style={styles.statValue}>{user?.stats?.hits}</Text>
                            </View>
                            <View style={styles.statRow}>
                                <Text style={styles.statLabel}>Inventory</Text>
                                <Text style={styles.statValue}>{user?.stats?.inventory}</Text>
                            </View>
                            <View style={styles.statRow}>
                                <Text style={styles.statLabel}>Extras</Text>
                                <Text style={styles.statValue}>⭐×{user?.stats?.extras}</Text>
                            </View>
                            <View style={[styles.statRow, { borderBottomWidth: 0 }]}>
                                <Text style={styles.statLabel}>Status</Text>
                                <Text style={styles.statValue}>{user?.stats?.status}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.attackButton} onPress={onAttack}>
                            <Text style={styles.attackButtonText}>Attack</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    backdrop: {
        flex: 1,
    },
    container: {
        backgroundColor: '#0a001f',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingBottom: 30,
        maxHeight: screenHeight * 0.8,
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: '#666666',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 20,
    },
    profileSection: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 15,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#FBBC05',
    },
    starIcon: {
        position: 'absolute',
        bottom: 30,
        left: '40%',
    },
    starIconImage: {
        height: 20,
        width: 20,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    achievementsContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    achievement: {
        color: '#FFFFFF',
        fontSize: 14,
        marginRight: 8,
    },
    userCode: {
        color: '#FFA500',
        fontSize: 14,
        marginBottom: 12,
    },
    badgesContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    badge: {
        backgroundColor: '#2A1B4A',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    badgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
    },
    statsSection: {
        // paddingHorizontal: 20,
        marginBottom: 30,
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#924FE8',
        alignSelf: 'flex-start',
    },
    underline: {
        height: 1,
        backgroundColor: '#3A3A3A',
        borderRadius: 2,
        marginBottom: 20,
    },
    statsList: {
        paddingHorizontal: 20,
        // gap: 15,
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#3A3A3A',
    },
    statLabel: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    statValue: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    actionButtons: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 15,
    },
    closeButton: {
        flex: 1,
        backgroundColor: '#2A1B4A',
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    attackButton: {
        flex: 1,
        backgroundColor: '#7B3AF5',
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: 'center',
    },
    attackButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default UserProfileDrawer; 