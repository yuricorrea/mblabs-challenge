import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, Login } from '../screens';

const Stack = createNativeStackNavigator();

const noHeader = { header: () => {} };

const Routes = () => {

    return(
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen options={noHeader} name="Login" component={Login} />
                <Stack.Screen options={noHeader} name="Register" component={Register} />
            </Stack.Group>
        </Stack.Navigator>
    )

};

export default Routes;
