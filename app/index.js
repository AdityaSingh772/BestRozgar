import {useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';

import {icons, images, COLORS, SIZES} from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';


const Home = () =>{
    return (
        <SafeAreaView>
            {/* for the above title only */}
            <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerLeft: ()=>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>

                    ),
                    headerRight: ()=>(
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                        
                    ), 
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style = {{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    
                    <Welcome
                    />
                    
                    <Popularjobs/>
                    <Nearbyjobs/>

                    
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;