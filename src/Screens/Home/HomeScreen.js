import React, { useEffect } from 'react'
import { Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, Platform, Image } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './HomeStyle'
import { useState } from 'react'
import ListItem from 'Components/ListItem'
import MembersItem from 'Components/MembersItem'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen(props) {
    const [showMembers, setShowMembers] = useState([])
    const [imageURI, setImageURI] = useState('')
    const ListData = useSelector((state) => state.listData)

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    useEffect(() => {
        let tempArr = ListData.filter((item) => item.FirstName.length > 0 && item.LastName.length > 0 && item.PhoneNumber.length > 0)
        setShowMembers(tempArr)
    }, [ListData])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });
        if (result.uri) { setImageURI(result.uri) }
    }

    return (
        <View style={styles.Container} >
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView>
                {
                    imageURI.length > 0 &&
                    <View
                        style={styles.DPContainer}
                    >

                        <Image
                            source={{ uri: imageURI }}
                            style={styles.DPImage}
                        />
                    </View>
                }
                {showMembers.length > 0
                    &&
                    <View style={styles.membersContainer}>
                        <Text style={styles.Heading}>Booked Slots</Text>
                        <FlatList
                            data={ListData}
                            keyExtractor={(item, index) => {
                                return 'MembersListKey-' + index
                            }}
                            renderItem={(item) => {
                                return <MembersItem data={item} navigation={props.navigation} />
                            }}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        />
                    </View>
                }
            </SafeAreaView>
            <View style={styles.ListContainer} >
                <Text style={styles.Heading}>Time Slots</Text>
                <FlatList
                    data={ListData}
                    keyExtractor={(item, index) => {
                        return 'MailListKey-' + index
                    }}
                    renderItem={(item) => {
                        return <ListItem data={item} navigation={props.navigation} />
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <TouchableOpacity
                onPress={pickImage}
                style={styles.CameraContainer}
            >
                <Feather name="camera" style={styles.Camera} />
            </TouchableOpacity>
        </View>
    )
}
