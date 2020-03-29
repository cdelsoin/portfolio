const styles = {
    container: {
        backgroundColor: '#262626',
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
        border: '4px solid white',
        padding: '5px',
        '@media(max-width: 820px)': {
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
        '@media(max-width: 820px)': {
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
        '@media(max-width: 820px)': {
            fontSize: '4vmin'
        },
        '@media(max-width: 420px)': {
            width: '100%',
            fontSize: '5vmin'
        }
    }
};

export default styles;
