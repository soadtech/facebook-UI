import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';//Ionicons
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';//
import Icon4 from 'react-native-vector-icons/AntDesign';

const ContentIcons = ({ icon, color, icon2 }) => (
    <View style={{ marginLeft: 10, backgroundColor: '#e9edf2', paddingHorizontal: 5, paddingVertical: 5, alignSelf: 'center', borderRadius: 50 }}>
        {icon2 ? (
            <Icon2 name={icon} size={25} color={color} />
        ) : (
            <Icon name={icon} size={25} color={color} />
        )}

    </View>
);

const ContentMedia = ({ icon, color, label, icon2 }) => (
    <View style={{ flexDirection: 'row', backgroundColor: '#f8fafb', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10, alignItems: 'center' }}>
        {icon2 ? (
            <Icon2 name={icon} size={20} color={color} />
        ) : (
            <Icon name={icon} size={20} color={color} />
        )}
        <Text style={{ marginLeft: 5 }}>{label}</Text>
    </View>
)

const ContentHistories = ({ name, photo, plus }) => (
    <View style={{ marginRight: 10 }}>
        <ImageBackground imageStyle={{ borderRadius: 20 }} style={{ width: 90, height: 90 }} source={{ uri: photo }}></ImageBackground>
        {plus && (
            <View style={{ position: 'absolute', bottom: 20, backgroundColor: '#1a77f0', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 50 }}>
                <Icon name='plus' size={15} color='white' />
            </View>
        )}
        <Text style={{ marginTop: 10, color: '#d3d4d8', fontSize: 16 }}>{name}</Text>
    </View>
)

const CardPublish = () => (

    <View style={{ paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f2f3f7' }}>
        <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
            <View style={{ marginLeft: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode='contain' source={{ uri: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80' }} />
            </View>
            <View>
                <Text style={{ color: '#38446d', fontSize: 18, fontWeight: 'bold' }}>Daniela Fernandez Ramos</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 15, height: 15 }} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/52/52349.png' }} />
                    <Text style={{ marginLeft: 5, color: '#d3d4d8' }}>Hace 3 dias</Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon2 name="star" color="#1977f2" size={20} />
                <View style={{ marginRight: 5 }}>
                    <Icon3 name="dots-three-horizontal" color="gray" size={20} />
                </View>
            </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ marginBottom: 10, color: '#d3d4d8', fontSize: 16, fontWeight: 'bold' }}>Me encanto la sesión de fotos que me hizo mi amigo 😄😍</Text>
            <ImageBackground imageStyle={{ borderRadius: 20 }} style={{ width: "100%", height: 200 }} source={{ uri: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' }}></ImageBackground>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ marginRight: 10, color: '#d3d4d8' }}>30 comentarios</Text>
                <Text style={{ color: '#d3d4d8' }}>5 compartidos</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon4 name="like1" color="#2c3a70" size={21} />
                    <View style={{ marginHorizontal: 20 }}>
                        <Icon name='comment' color="#2c3a70" size={21} />
                    </View>
                    <Icon name='share' color="#2c3a70" size={21} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#d3d4d8', fontSize: 14 }}>Fernando y 50 personas mas</Text>

                    <View style={{ backgroundColor: '#1977f2', paddingHorizontal: 5, marginRight: 10, paddingVertical: 5, borderRadius: 50, alignSelf: 'center' }}>
                        <Icon4 name="like1" color="#fff" size={15} />

                    </View>
                    <View style={{ backgroundColor: '#e83c6e', position: 'absolute', right: -5, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 50, alignSelf: 'center' }}>
                        <Icon2 name='heart' color="#fff" size={15} />

                    </View>

                </View>
            </View>
        </View>
    </View>

)

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', paddingHorizontal: 18, borderBottomWidth: 1, borderBottomColor: '#f2f3f7', paddingBottom: 10 }}>
                <View style={{ alignSelf: 'center', backgroundColor: '#1777f3', paddingHorizontal: 11, paddingVertical: 10, borderRadius: 50 }}>
                    <Icon name="facebook" size={30} color="#fff" />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <ContentIcons icon="search" color="#2a3867" />
                    <ContentIcons icon="notifications" color="#2a3867" icon2 />
                    <ContentIcons icon="facebook-messenger" color="#2794e8" />
                    <View style={{ marginLeft: 10 }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode='contain' source={{ uri: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80' }} />
                    </View>
                </View>
            </View>

            <View style={{ paddingVertical: 20, backgroundColor: 'white', borderBottomStartRadius: 20, borderBottomEndRadius: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode='contain' source={{ uri: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80' }} />
                    <Text style={{ color: '#d3d4d8', fontSize: 16 }}>¿En que estas pensando, Fernando?</Text>
                    <Text style={{ fontSize: 20 }}>😄</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>
                    <ContentMedia icon="camera" color="#74bb94" label="Fotos" />
                    <ContentMedia icon="video" color="#f51955" label="En vivo" />
                    <ContentMedia icon="eye" color="#246fd2" label="Video corto" />
                </View>
            </View>
            <ScrollView>
                <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                    <ScrollView horizontal>
                        <ContentHistories plus name="Crear historia" photo='https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80' />
                        <ContentHistories name="Kelvin Martinez" photo="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1576&q=80" />
                        <ContentHistories name="Camilo Perez" photo='https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1622&q=80' />
                        <ContentHistories name="linda Acosta" photo="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1541&q=80" />
                    </ScrollView>
                </View>

                <View style={{ flex: 1, borderTopStartRadius: 20, borderTopEndRadius: 20, backgroundColor: "white" }}>
                    <CardPublish />
                    <CardPublish />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 15,
        backgroundColor: '#f2f3f7'
    }
})
export default Home;