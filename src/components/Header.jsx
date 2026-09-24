import { StyleSheet, View, Text } from 'react-native';
import COLORS from '../constants/colors';

export function Header( {GOAL} ) {
    return(
    <View style={headerStyles.container}>
        <Text style={headerStyles.title}>💧 Diário de Hidratação</Text>
        <Text style={headerStyles.subtitle}>Meta Diária: {GOAL}ml</Text>

    </View>
    )
}

const headerStyles = StyleSheet.create({
  container:{
    marginBottom: 24,
    alignItems: 'center',
  },

  title:{
    fontSize: 22,
    color: COLORS.textMain,
    fontWeight:'bold',
  },

  subtitle:{
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 4,
  },
})


