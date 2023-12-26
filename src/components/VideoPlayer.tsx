import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Video from 'react-native-video'

const { width, height } = Dimensions.get('window');

const VideoPlayerScreen = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <View style={isFullScreen ? styles.fullScreenContainer : styles.container}>

            <Video
                source={{ uri: 'https://live.vfantasy.net/channel/sky2/playlist.m3u8' }}
                paused={false}
                repeat={true}
                style={isFullScreen ? styles.fullScreenMediaPlayer : styles.mediaPlayer}
                controls={true}
                fullscreen={true}
                fullscreenAutorotate={true}
                resizeMode={isFullScreen ? 'cover' : 'contain'}                
            />

            {!isFullScreen && (
                <TouchableOpacity onPress={toggleFullScreen} style={styles.fullScreenButton}>
                    <Text style={styles.fullScreenButtonText}>Go Full Screen</Text>
                </TouchableOpacity>
            )}

            {isFullScreen && (
                <TouchableOpacity onPress={toggleFullScreen} style={styles.exitFullScreenButton}>
                    <Text style={styles.exitFullScreenButtonText}>Exit Full Screen</Text>
                </TouchableOpacity>
            )}

        </View>
    )
}

export default VideoPlayerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#000000',
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
    },
    fullScreenMediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    fullScreenButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        borderRadius: 5,
    },
    exitFullScreenButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        borderRadius: 5,
    },
    fullScreenButtonText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    exitFullScreenButtonText: {
        color: '#000000',
        fontWeight: 'bold',
    },
})
