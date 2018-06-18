import { StyleSheet } from 'react-native';
import Constants from '../constants/Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20
    },
    header: {
        flex:1,
        paddingLeft: 10,
        paddingRight:10
    },
    headerText: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 25
    },
    headerVertical: {
        width: 2,
        backgroundColor: Constants.gray,
        height: 40,
        position: 'relative',
        left: 23
    },
    dashLine: {
        flexDirection: 'column',
        position: 'relative',
        left: 0,
        marginLeft: 23
    },
    verticalLine: {
        marginRight: 20,
        marginLeft: 20,
        height: 2,
        backgroundColor: Constants.greyColor,
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff'
    },
    content: {
        padding: 10,
    },
    active: {
        // backgroundColor: 'rgba(255,255,255,1)'
    },
    inactive: {
        // backgroundColor: 'rgba(245,252,255,1)'
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    activeSelector: {
        fontWeight: 'bold'
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10
    }
});

export default styles;