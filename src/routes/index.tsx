import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, Login, Menu, EditEvent, EventList, Event } from '@screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppSelector  } from '@context';
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
                options={{ title: i18n.t('menu.editEvent')}}
                name="edit_event"
                component={EditEvent}
            />
            <MenuStack.Screen
                options={{ title: i18n.t('menu.myEvents')}}
                name="event_list"
                component={EventList}
                initialParams={{ mine: true }}
            />
            <MenuStack.Screen
                name="single"
                component={Event}
                options={{
                    title: i18n.t('event.event'),
                }}
            />
        </MenuStack.Navigator>
    );

    const ExploreScreens = () => (
        <ExploreStack.Navigator>
            <ExploreStack.Screen
                name="event_list"
                component={EventList}
                options={noHeader}
            />
            <ExploreStack.Screen
                name="single"
                component={Event}
                options={{
                    title: i18n.t('event.event'),
                }}
            />
            <ExploreStack.Screen
                options={{ title: i18n.t('menu.editEvent')}}
                name="edit_event"
                component={EditEvent}
            />
        </ExploreStack.Navigator>
    )

    const SignedScreens = (
        <Tab.Navigator>
            <Tab.Screen 
                options={{
                    ...tabScreenOptions,
                    tabBarLabel: i18n.t('tabBar.eventList'),
                }} 
                name="EventList"
                component={ExploreScreens}
            />
            <Tab.Screen
                options={{
                    ...tabScreenOptions,
                    tabBarLabel: i18n.t('tabBar.menu'),
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
                options={noHeader}
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
