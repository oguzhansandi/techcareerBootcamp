import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const App = () => {

return (
<SafeAreaView>
    <View style={{padding:20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
           <Text style={{ color: 'gray' }}>Friday, 15 Dec</Text>
           <Text style={{ color: 'gray' }}>Search</Text>
        </View>

        <View>
            <Text style={{color:'#1A1D1F', fontSize: 30, fontWeight: 'bold', marginTop: 20, }}>Learn</Text>
            <Text style={{color:'#1A1D1F'}}>Choose part of the body</Text>
        </View>
        <View style={{marginTop: 20, backgroundColor:'#eb7662', padding:20, borderRadius:15,}}>
            <Text style={{color:'#fff', fontWeight:'bold', marginBottom : 10, fontSize : 18}}>Head & Face</Text>
            <Text style={{color:'#F5BAB0'}}>11 diseases</Text>
        </View>
        <View style={{marginTop: 20, backgroundColor: '#8DC4BB', padding: 20, borderRadius: 15}}>
            <Text style={{color:'#fff', fontWeight: 'bold', fontSize: 18, marginBottom:7}}>Back & Neck</Text>
            <Text style={{color:'#F5BAB0'}}>9 diseases</Text>
        </View>
        <View style={{backgroundColor:'#F2982F', marginTop:20, padding: 20, borderRadius: 15, }}>
            <Text style={{color:'#fff', marginBottom: 7, fontWeight: 'bold', fontSize: 18}}>Elbow & Shoulder</Text>
            <Text style={{color:'#f5bab0'}}>12 diseases</Text>
        </View>
        <View style={{backgroundColor:'#327389', marginTop: 20, padding: 20, borderRadius: 15}}>
            <Text style={{color:'#fff', fontWeight:'bold', fontSize: 18, marginBottom:7}}>Hand & Arm</Text>
            <Text style={{color:'#f5bab0'}}>2 diseases</Text>
        </View> 
    </View>
</SafeAreaView>
    );
};



export default App;