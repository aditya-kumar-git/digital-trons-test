import React, { useEffect, useRef, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { changeListData } from 'Redux/Action'
import styles from './DetailStyle'
import { Ionicons } from '@expo/vector-icons';


export default function DetailScreen(props) {

    const [selectedState, setSelectedState] = useState({})
    const [firstName, setFirstName] = useState('')
    const [lasttName, setLasttName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        setFirstName(selectedState.FirstName)
        setLasttName(selectedState.LastName)
        setPhoneNumber(selectedState.PhoneNumber)
    }, [selectedState])

    useEffect(() => {
        let tempArr = ListData.filter(item => item.time === props.route.params.selectedTime)
        setSelectedState(tempArr[0])
    }, [ListData])

    let changeInputs = (data, inputType) => {
        switch (inputType) {
            case 1:
                setFirstName(data)
                break;
            case 2:
                setLasttName(data)
                break;
            case 3:
                setPhoneNumber(data)
                break;

            default:
                break;
        }

    }

    let submitData = () => {
        let tempArr = ListData.map((item) => {
            if (item.time === props.route.params.selectedTime) {
                return {
                    time: item.time,
                    FirstName: firstName,
                    LastName: lasttName,
                    PhoneNumber: phoneNumber,
                }
            }
            else {
                return item
            }
        })

        dispatch(changeListData(tempArr))
        props.navigation.goBack()
    }

    let dismissKeyboard = () => {
        Keyboard.dismiss()
    }

    let cancelSubmission = () => {
        props.navigation.goBack()
    }

    const ListData = useSelector((state) => state.listData)
    const dispatch = useDispatch()
    const LNinput = useRef(null)
    const PNinput = useRef(null)
    return (

        <KeyboardAvoidingView
            style={styles.Container}
            behavior='padding'
            enabled={true}
        >
            <SafeAreaView>
                <View
                    style={styles.BackButtonContainer}
                >
                    <TouchableOpacity
                        onPress={cancelSubmission}
                        activeOpacity={0.7}
                    >

                        <Ionicons name="chevron-back" style={styles.BackButton} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>



            <ScrollView
                style={styles.DataContainer}
                bounces={false}
                alwaysBounceHorizontal={false}
                alwaysBounceVertical={false}
            >


                <View
                    style={styles.Row}
                >

                    <Text style={styles.Heading}>{selectedState.time}</Text>
                    <View style={styles.CancelButtonContainer} >

                        <TouchableOpacity
                            style={styles.CancelButton}
                            onPress={cancelSubmission}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.CancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TextInput
                    placeholder='First Name'
                    placeholderTextColor='grey'
                    value={firstName}
                    onChangeText={(data) => {
                        changeInputs(data, 1)
                    }}
                    style={styles.InputStyles}
                    onSubmitEditing={() => {
                        LNinput.current.focus()
                    }}
                    blurOnSubmit={false}
                />

                <TextInput
                    placeholder='Last Name'
                    placeholderTextColor='grey'
                    value={lasttName}
                    onChangeText={(data) => {
                        changeInputs(data, 2)
                    }}
                    style={styles.InputStyles}
                    ref={LNinput}
                    onSubmitEditing={() => {
                        PNinput.current.focus()
                    }}
                    blurOnSubmit={false}
                />

                <TextInput
                    placeholder='Phone Number'
                    placeholderTextColor='grey'
                    value={phoneNumber}
                    onChangeText={(data) => {
                        changeInputs(data, 3)
                    }}
                    keyboardType='numbers-and-punctuation'
                    style={styles.InputStyles}
                    ref={PNinput}
                    blurOnSubmit={false}
                    returnKeyType='done'
                    onSubmitEditing={dismissKeyboard}
                />

                <TouchableOpacity
                    style={styles.SaveButton}
                    onPress={submitData}
                    activeOpacity={0.7}
                >
                    <Text style={styles.SaveButtonText}>
                        {
                            props.route.params.isBooked ? 'Save Changes' : 'Book Slot'
                        }
                    </Text>
                </TouchableOpacity>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}
