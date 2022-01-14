import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import categories from '../data/category';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
    list: {
        width: 200, // changed
        paddingLeft: 10, // changed
        paddingRight: 5, //changed
    },
    fullList: {
        width: "auto",
    },
});

export default function SwipeableTemporaryDrawer({ setCategory }) {
    const classes = useStyles();




    const [state, setState] = React.useState({
        left: false,

    });



    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })} role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    Categories
                </ListItem>

            </List>
            <Divider />
            <List>
                {categories.map((text, index) => (
                    <ListItem
                        style={{ height: 40, borderRadius: 3 }}
                        button key={text}
                        onClick={() => setCategory(text)}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>

            <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon /></Button>

            <ThemeProvider theme={theme}>
                <CssBaseline />

                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
            </ThemeProvider>

        </div >
    );
}


