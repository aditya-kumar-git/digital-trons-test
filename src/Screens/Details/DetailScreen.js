import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { changeListData } from 'Redux/Action'

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

    let cancelSubmission = () => {
        props.navigation.goBack()
    }

    const ListData = useSelector((state) => state.listData)
    const dispatch = useDispatch()
    return (
        <SafeAreaView>
            <Text>{selectedState.time}</Text>

            <TextInput
                placeholder='First Name'
                value={firstName}
                onChangeText={(data) => {
                    changeInputs(data, 1)
                }}
            />

            <TextInput
                placeholder='Last Name'
                value={lasttName}
                onChangeText={(data) => {
                    changeInputs(data, 2)
                }}
            />

            <TextInput
                placeholder='Phone Number'
                value={phoneNumber}
                onChangeText={(data) => {
                    changeInputs(data, 3)
                }}
                keyboardType='numbers-and-punctuation'
            />

            <TouchableOpacity
                style={{ backgroundColor: 'grey', margin: 20, padding: 10 }}
                onPress={submitData}
            >
                <Text>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ backgroundColor: 'orange', margin: 20, padding: 10 }}
                onPress={cancelSubmission}
            >
                <Text>Cancel</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
