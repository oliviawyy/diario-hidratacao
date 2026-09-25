import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../constants/colors';

export function ActionButtons({onAddWater}) {
    return (
        <View>

            <Text style={styles.text}>Adicionar Consumo</Text>

            <View>
                <Pressable style={styles.buttonAdd} onPress={() =>onAddWater(200)}>
                    <Text style={styles.textoBotao}>+200 ml</Text>
                </Pressable>

                <Pressable style={styles.buttonAdd} onPress={() => onAddWater(350)}>
                    <Text style={styles.textoBotao}>+350 ml</Text>
                </Pressable>

                <Pressable style={styles.buttonAdd} onPress={() => onAddWater(500)}>
                    <Text style={styles.textoBotao}>+500 ml</Text>
                </Pressable>
            </View>

            <Pressable style={styles.botaoReset} onPress={() => onReset()}>
                <Text style={styles.textoReset}>🔁 Resetar Dia</Text>
            </Pressable>

        </View>

    );


}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },


    text: {
        color: COLORS.textMain,
        fontSize: 16,
        textAlign: 'center',
    },

    buttonAdd: {
        padding: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        marginRight: 10,
        width: 100,
        alingnItems: 'center',

    },

    botaoReset: {
        padding: 10,
        backgroundColor: COLORS.danger,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        width: 100,
    },

    textoReset: {
        color: COLORS.textMain,
        fontSize: 16,
        textAlign: 'center',
    },
});

