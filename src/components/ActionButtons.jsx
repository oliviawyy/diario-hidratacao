import { View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../constants/colors';

export function ActionButtons() {
    return (
        <View>

        <Text>Adicionar Consumo</Text>
        {/* <Button>+200 ml</Button>
        <Button>+350 ml</Button>
        <Button>+500 ml</Button>
        <Button>🔁 Resetar Dia</Button> */}

        </View>

    );

    
}

const styles = StyleSheet.create({
    text: {
        color: COLORS.textMain,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ActionButtons