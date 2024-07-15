import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown';

export default function ModalCity({options, textDropDown, onSelectLocation}:any): React.JSX.Element{
    return (
        <SelectDropdown
            data={options}
            onSelect={(selectedItem) => {
                onSelectLocation(selectedItem)
            }}
            renderButton={(selectedItem, isOpened) => {
                return (
                    <View style={s.dropdownButtonStyle}>
                        <Text style={s.dropdownButtonTxtStyle}>
                            {(selectedItem && selectedItem.title) || textDropDown}
                        </Text>
                    </View>
                );
            }}
            renderItem={(item, index, isSelected) => {
                return (
                    <View style={{...s.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                        <Text style={s.dropdownItemTxtStyle}>{item.nome || item}</Text>
                    </View>
                );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={s.dropdownMenuStyle}
        />
    )
}

const s = StyleSheet.create({
    text: {
        fontWeight: 'bold',
    },
    dropdownMenuStyle: {
        backgroundColor: 'rgba(152, 251, 152, 0.9)',
        borderRadius: 8,
        height: 'auto',
        width: '90%',
        left: 0,
    },
    dropdownButtonStyle: {
        width: '90%',
        height: 60,
        backgroundColor: 'rgba(152, 251, 152, 0.5)',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownItemStyle: {
        width: 'auto',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
      },
      dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
        textAlign: 'center',
      },
})