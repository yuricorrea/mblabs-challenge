import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, Login, Menu, EditEvent, EventList } from '@screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppSelector  } from '@redux';
import theme from '@theme';
import i18n from '@translate';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MenuStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();

const Routes = () => {

    const currentUser = useAppSelector(state => state.account.currentUser) || null;

    const currentTheme = theme();

    const noHeader = { headerShown: false };
    const tabBarLabelStyle = {
        tabBarActiveTintColor: currentTheme.primaryColor,
        tabBarInactiveTintColor: currentTheme.textColor,
    };
    const tabBarIcon = () => {};

    const tabScreenOptions = {
        ...noHeader,
        ...tabBarLabelStyle,
        tabBarIcon,
    }

    const MenuScreens = () => (
        <MenuStack.Navigator>
            <MenuStack.Screen 
                options={noHeader} 
                name="main_menu" 
                component={Menu} 
            />
            <MenuStack.Screen 
                options={{ title: i18n.t('menu.createEvent')}} 
                name="create_event" 
                component={EditEvent} 
            />
            <MenuStack.Screen 
                options={{ title: i18n.t('menu.myEvents')}} 
                name="my_events" 
                component={EventList} 
                initialParams={{ mine: true }}
            />
        </MenuStack.Navigator>
    )

    const SignedScreens = (
        <Tab.Navigator>
            <Tab.Screen 
                options={{
                    ...tabScreenOptions,
                    tabBarLabel: i18n.t('tabBar.eventList'),
                }} 
                name="EventList"
                component={EventList}
            />
            <Tab.Screen 
                options={{
                    ...tabScreenOptions,
                    tabBarLabel: i18n.t('tabBar.menu')
                }} 
                name="Menu" 
                component={MenuScreens} 
            />
        </Tab.Navigator>
    );

    const AuthScreens = (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login} 
            />
            <Stack.Screen 
                options={noHeader} 
                name="Register" 
                component={Register} 
            />
        </Stack.Navigator>
    )

    if (currentUser != null)
        return SignedScreens;
    return AuthScreens;

};

export default Routes;
