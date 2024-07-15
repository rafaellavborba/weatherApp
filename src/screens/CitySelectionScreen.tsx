import React, {useState} from "react";
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    ImageBackground 

  } from 'react-native';
import ModalLocation from "../components/citySelection/ModalLocation";
import { useNavigation } from '@react-navigation/native';
import location from '../api/location.json';
  const backgroundImage = require('../public/imagens/wallpaper/citySelect.png');
 
export default function CitySelectionScreen(): React.JSX.Element{
    const navigation = useNavigation();

    const [citys, setCitys] = useState([]);
    const [loc, setLocation] = useState(location);
    const [form, setForm] = useState({ state: '', city: '' });

    const handleState = (stateSelected: any) => {
        setForm({ ...form, state: stateSelected.nome });
        setCitys(stateSelected.cidades);
    }

    const handleCity = (citySelected: any) => {
        navigation.navigate('Weather')
        setForm({ ...form, city: citySelected });
        // RAFAELLA, fazer req da coordenada
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground  
                source={backgroundImage} 
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    {
                        !citys.length ? 
                        (<ModalLocation options={loc.estados} textDropDown="Selecione o estado" onSelectLocation={handleState}/>) :
                        (<ModalLocation options={citys} textDropDown="Selecione a cidade" onSelectLocation={handleCity}/>)
                    }
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({   
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', 
    },
})