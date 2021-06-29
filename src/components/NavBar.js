import React, { useContext, useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../store";

const NavBar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
        setDrawer(!drawer)
    }

    const logout = () => {
        // todo use authcontext logout method
        toggleDrawer();
        localStorage.clear();
        setIsAuth(false);
    }

    return (
        <div>
            <AppBar position="static" >
                <Toolbar style={{ display: "flex", justifyContent: "space-between"}}>
                    {isAuth ? <IconButton color="inherit" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton> : null}
                    <Typography variant="h6">
                        React Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
                <Drawer
                open={drawer}
                onClose={toggleDrawer}
                style={{ width: 600 }}
            >
                <List>
                    <ListItem>
                        <Link to="/">
                            <Button color="secondary" onClick={logout}>
                                <ExitToAppIcon /> Logout
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/dashboard">
                            <Button color="primary" onClick={toggleDrawer}>
                                <DashboardIcon /> Dashboard
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default withRouter(NavBar);