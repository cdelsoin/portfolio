const styles = {
    container: {
        backgroundColor: '#00808080', // teal with 50% opacity
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headshot: {
        height: '30vmin',
        maxHeight: '320px',
        borderRadius: '50%',
        boxShadow: '0 0 15px #000000',
        '@media(max-width: 920px)': {
            height: '50vmin'
        },
        '@media(max-width: 420px)': {
            height: '60vmin'
        }
    },
    bio: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        width: '900px',
        '@media(max-width: 920px)': {
            flexDirection: 'column',
            justifyContent: 'center'
        },
        '@media(max-width: 420px)': {
            flexDirection: 'column',
            justifyContent: 'center',
            width: '80%',
            fontSize: '5vmin'
        }
    },
    bioText: {
        width: '500px',
        fontSize: '24px',
        '@media(max-width: 920px)': {
            fontSize: '4vmin',
            textAlign: 'center'
        },
        '@media(max-width: 420px)': {
            width: '100%',
            fontSize: '5vmin',
            textAlign: 'center'
        }
    }
};

export default styles;
