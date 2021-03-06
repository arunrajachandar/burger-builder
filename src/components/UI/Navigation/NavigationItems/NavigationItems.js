import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
const navigationItems = (props) =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        
        {props.isAuth ? 
            <NavigationItem link="/orders" >Summary</NavigationItem>: null}
        {props.isAuth ?
                <NavigationItem link="/logout" >Log Out</NavigationItem>:
                <NavigationItem link="/auth" >Authenticate</NavigationItem>}



        
        

    </ul>
)

export default navigationItems;