import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import PaginaScreen from '../screens/PaginaScreen';
import Pagina2Screen from '../screens/Pagina2Screen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Pgina3Screen from '../screens/Pgina3Screen';
import Pagina4Screen from '../screens/Pagina4Screen';

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Pagina1' component={PaginaScreen} />
            <Tab.Screen name='Pagina2' component={Pagina2Screen} />
            <Tab.Screen name='Pagina3' component={Pgina3Screen}/>
            <Tab.Screen name='Pagina4' component={Pagina4Screen}/>
        </Tab.Navigator>
    );
}

////////////////////JP///////////////////////

const Stack = createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator screenOptions={ ()=> ({headerShown: false}) } >
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Bottom' component={ MyTabs } />
        </Stack.Navigator>
    )
}



////////////////////JP////////////////////////



export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}