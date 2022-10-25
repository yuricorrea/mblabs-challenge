import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, Login, EventList } from '@screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppSelector  } from '@redux';
import theme from '@theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


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

    console.log(tabScreenOptions);

    const SignedScreens = (
            <Tab.Navigator>
                <Tab.Screen 
                    options={tabScreenOptions} 
                    name="EventList" 
                    component={EventList} 
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
