import { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButtons';

export default function App() {
    const GOAL = 2000; // Meta diária em ml
    const [consumed, setCosumed] =  useState(0);

    // funcao para acumular a quantidade ingerida
    const handleAddWater = (amount) => {
      setCosumed(consumed + amount);
      
    };

    //funcao para zerar o contador
    const handleReset = () => {
      setCosumed(0);
    };

    return (
      <SafeAreaProvider>
        <SafeAreaView>
    
        </SafeAreaView>
      </SafeAreaProvider>
    )
    
  
}

const styles = StyleSheet.create({
 
});


