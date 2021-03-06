import React, {useEffect} from "react";
import {Button, Hidden, makeStyles} from "@material-ui/core";
import ReactDOM from 'react-dom'
import Slider from 'react-styled-carousel';
import NavbarComponent from "./NavbarComponent";
import MyDrawer from "../pages/MyDrawer";
import MUI_Card from "./MUI_Card";
import styled from "styled-components/macro";

//import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';


const myStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar : theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
}))
export default function MessageDetailsReact ({messages}){

    const classes = myStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <>
            <NavbarComponent handleDrawerToggle={handleDrawerToggle}/>
            <Hidden lgDown>
                <MyDrawer
                    variant='permanent'
                    open ={true}
                />
            </Hidden>
            <Hidden xlUp>
                <MyDrawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            </Hidden>
            <div className="myCard">
                <div className={classes.toolbar}></div>

                {/*<AwesomeSlider cssModule={AwsSliderStyles}>
                            {messages?.map((watchListItem) => (
                                <MUI_Card messages={messages} randomItem={watchListItem}/>
                            ))}
                </AwesomeSlider>*/}

            </div>

        </>
    )
}

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d6cbbc;
  
`

const Test = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1161ee;
  
`