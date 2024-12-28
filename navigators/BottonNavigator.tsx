import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import PaginaScreen from '../screens/PaginaScreen';
import Pagina2Screen from '../screens/Pagina2Screen';

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Pagina1' component={PaginaScreen} />
            <Tab.Screen name='Pagina2' component={Pagina2Screen} />
        </Tab.Navigator>
    );
}

export default function BottonTab(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}