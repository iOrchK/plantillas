import { makeStyles } from '@material-ui/styles';

const centeredStyleObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleObject
    },
    cardContainer: {
        width: 400,
        height: 200,
        padding: '2rem',
        flexDirection: 'column',
        ...centeredStyleObject
    },
    title: {
        fontSize: '4rem'
    },
    titleGridContainer: {
        ...centeredStyleObject
    },
    textFieldSearch: {
        width: '90%'
    },
    searchButton: {
        marginLeft: '0.5rem'
    },
    buttonsContainer: {
        marginTop: '0.5rem'
    },
    movieIcon: {
        fontSize: '4rem'
    }
});