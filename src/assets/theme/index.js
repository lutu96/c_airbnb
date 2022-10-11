const theme = {
    color: {
        primary: '#ff385c',
        secondary: '#00848a'
    },
    text: {
        primary: '#484848',
        secondary: '#222'
    },
    border: {
        primary: '#ddd'
    },
    mixin: {
        boxShadow: `transform: box-shadow 200ms ease;
        &:hover {
            box-shadow: 0 2px 4px rgba(0,0,0,0.18);
        }`,
        hoverBg: borderRadius => `&::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
            border-radius: ${borderRadius};
            transition: background-color 200ms ease;
        }
        &:hover::before {
            background-color: #eee;
        }`
    }
}

export default theme