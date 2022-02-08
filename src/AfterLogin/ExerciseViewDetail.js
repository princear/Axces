import {
    View,
    Image,
    ActivityIndicator,
    ImageBackground,
    StyleSheet,
    Platform,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
    Linking, SafeAreaView,
    ScrollView, FlatList, TouchableOpacityBase
} from "react-native";

import React, { Component } from "react";
import VideoPlayer from 'react-native-video-player';

import Header from '../Components/Header/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ApiScreen } from '../Api/ApiScreen'
import AsyncStorage from "@react-native-community/async-storage";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Modal from 'react-native-modal';
import Footer from '../Components/Footer/BlackFooter'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { MenuProvider } from 'react-native-popup-menu';
import { getallbookmark } from "../Redux/Actions/BookmarkAction";
import { connect } from "react-redux";



class ViewExerciseDetail extends Component {

    constructor(props) {

        super(props);
        this.state = {

            isLoading: false,
            dataSource: [],
            Title: '',
            image: '',
            description: '',
            dataSource1: [],
            dataSource2: '',
            isPrivate: false,
            isVisible: true,
            vid: '',
            Video: '',
            bookmark: '',
            selected: '',
            unselected: '',
            selectedButton: null,
            text: '',
            text2:''
        };
        this.arrayholder = []
        this.arrayholder2 = []
        this.selectionOnPress = this.selectionOnPress.bind(this);

    }


    componentDidMount = async () => {
        console.log('props', this.props)

        const Id = this.props.route.params.EquipId;
        const dataSHowExercise = this.props.route.params.exercise


        this.setState({
            isLoading: true
        })



        const login = await AsyncStorage.getItem('login');
        //console.log("dashboard", login);

        let data = JSON.parse(login);
        console.log('#################3', data)
        this.access_token = data;

        const url = ApiScreen.base_url + ApiScreen.EquipmentDetail
        console.log("url:" + url);
        fetch(url,
            {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': this.access_token
                    // <-- Specifying the Content-Type

                }),

                body: JSON.stringify(
                    {

                        id: Id,


                    })


            }).then(response => response.json())
            .then((responseJson) => {
                console.log('Equipment detailaa', responseJson.data.equipment)

                setTimeout(() => {
                    this.setState({

                        isLoading: false,
                        // dataSource: responseJson.data.equipment,
                        Title: responseJson.data.equipment.title,
                        image: responseJson.data.equipment.image_original_path,
                        description: responseJson.data.equipment.description,
                        bookmark: responseJson.data.equipment.bookmark_id


                    })
                }, 2000)

            })
            .catch(error => console.log(error))




        const url1 = ApiScreen.base_url + ApiScreen.EquipRelateExcercise
        console.log("url1:" + url1);
        fetch(url1,
            {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': this.access_token
                    // <-- Specifying the Content-Type

                }),

                body: JSON.stringify(
                    {

                        id: Id,


                    })


            }).then(response => response.json())
            .then((responseJson) => {
                console.log('Excercise detailaa', responseJson)

                setTimeout(() => {
                    this.setState({

                        isLoading: false,
                        dataSource: responseJson.data.exercises,
                        //   Title:responseJson.data.equipment.title,
                        //   image:responseJson.data.equipment.image_original_path,
                        //   description:responseJson.data.equipment.description


                    },
                    function () {
                        this.arrayholder2 = responseJson.data.exercises;
                    })
                }, 2000)

            })
            .catch(error => console.log(error))


        const url2 = ApiScreen.base_url + ApiScreen.EquipRelateVedio;
        console.log("url2:" + url2);
        fetch(url2,
            {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': this.access_token
                    // <-- Specifying the Content-Type

                }),

                body: JSON.stringify(
                    {

                        id: Id,


                    })


            }).then(response => response.json())
            .then((responseJson) => {
                console.log('Excercise detailaa>>>>>>>>>>>>>', responseJson.data.videos)

                setTimeout(() => {
                    this.setState({

                        isLoading: false,
                        dataSource1: responseJson.data.videos,
                        //   Title:responseJson.data.equipment.title,
                        //   image:responseJson.data.equipment.image_original_path,
                        //   description:responseJson.data.equipment.description


                    },
                        function () {
                            this.arrayholder = responseJson.data.videos;
                        })
                }, 2000)

            })
            .catch(error => console.log(error))





    }
    sendtomodal(id, video) {

        console.log('video', video)

        this.setState({

            isPrivate: true,
            vid: id,
            Video: video

        })


    }
    modelfalse() {

        this.setState({

            isPrivate: false,

        })

    }

    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }
    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.arrayholder.filter(function (item) {
            //applying filter for the inserted text in search bar
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            //setting the filtered newData on datasource
            //After setting the data it will automatically re-render the view
            dataSource: newData,
            text: text,
        });
    }
    SearchFilterFunction2(text2) {
        //passing the inserted text in textinput
        const newData = this.arrayholder2.filter(function (item) {
            //applying filter for the inserted text in search bar
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text2.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            //setting the filtered newData on datasource
            //After setting the data it will automatically re-render the view
            dataSource: newData,
            text2: text2,
        });
    }


    render() {


        if (this.state.isLoading == true)
            return (<View style={{ flex: 1, justifyContent: 'center', position: 'absolute', top: '50%', left: '40%' }}>

                <ActivityIndicator
                    size="large"
                    style={{
                        backgroundColor: "rgba(20,116,240,.8)",
                        height: 80,
                        width: 80,
                        zIndex: 999,
                        borderRadius: 15
                    }}
                    size="small"
                    color="#ffffff"
                />

            </View>

            )


        return (

            <View style={styles.container}>
                <MenuProvider>

                    <View style={styles.head}>
                        <View style={{ width: wp('20%') }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EquipDetail')}
                                style={styles.button}>
                                <Image source={require('../../Assets/back.png')} style={styles.backicon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: wp('60%'), justifyContent: 'center' }}>
                            <Text style={{ alignSelf: 'center', fontFamily: 'K2D-Normal', fontSize: 16, color: '#141821' }}>{this.state.Title}</Text>
                        </View>
                        <View style={{ width: wp('20%') }}>


                            <Menu>

                                {this.state.bookmark == null ?

                                    // <MenuTrigger>
                                    <TouchableOpacity
                                        onPress={() => this.bookmark(this.props.route.params.EquipId)}
                                        style={styles.button}>
                                        <Image source={require('../../Assets/Bookmark=Default.png')} style={styles.loginicon} />
                                    </TouchableOpacity>
                                    // </MenuTrigger>
                                    :
                                    // <MenuTrigger>
                                    <TouchableOpacity
                                        onPress={() => this.Unbookmark(this.state.bookmark)}
                                        style={styles.button}>


                                        <Image source={require('../../Assets/Bookmark=Selected.png')} style={styles.loginicon} />


                                    </TouchableOpacity>
                                    // </MenuTrigger>

                                }

                            </Menu>

                        </View>
                    </View>

                    {/* <View style={{ marginHorizontal: wp(5), }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.searchSection}>
                                <Image style={{ height: hp(3), width: wp(10) }} resizeMode="contain" source={require('../../Assets/search.png')} />
                              
                              {
                                  this.props.route.params.exercise === 'exercise' ? 
                                  <TextInput
                                    style={styles.input}
                                    onChangeText={text2 => this.SearchFilterFunction2(text2) }
                                    value={this.state.text2}
                                    underlineColorAndroid='transparent'
                                    placeholder="Search Exercise" />:
                                    <TextInput
                                    style={styles.input}
                                    onChangeText={text => this.SearchFilterFunction(text) }
                                    value={this.state.text}
                                    underlineColorAndroid='transparent'
                                    placeholder="Search Workout" />
                              }
                                
                            </View>
                            <TouchableOpacity style={{ marginLeft: wp(1), }} onPress={() => this.selectionOnPress("BASIC")}>
                                <Image style={{ height: hp(3), width: wp(10), }} resizeMode="contain" source={this.state.selectedButton === 'BASIC' ? require('../../Assets/listShow.png') : require('../../Assets/fourList.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.selectionOnPress("INTERMEDIATE")}>
                                <Image style={{ height: hp(3), width: wp(10) }} resizeMode="contain" source={this.state.selectedButton === "BASIC" ? require('../../Assets/listShowblack.png') : require('../../Assets/listShow.png')} />
                            </TouchableOpacity>
                        </View>

                        <View>
                        </View>

                        <View>

                        </View>
                    </View> */}

                    {
                        this.state.selectedButton === "BASIC" ?
                            <View style={{ marginBottom: hp(28) }}>
                              
                                <FlatList
                                    key={'_'}
                                    data={this.props.route.params.exercise === 'exercise' ? this.state.dataSource : this.state.dataSource1}
                                    keyExtractor={item => "_" + item.id}
                                    renderItem={({ item, index }) => (
                                        <View>

                                            <View style={styles.deatilcontainer}>
                                                <TouchableOpacity
                                                    onPress={() => this.sendtomodal(item.id, item.video)}
                                                >
                                                    <Image source={require('../../Assets/playwhite.png')} style={{ position: 'absolute', top: hp(7), zIndex: 999999, left: wp(15), height: hp(5), }} resizeMode="contain" />

                                                    <View style={styles.imagebox}>
                                                        <Image source={{ uri:  this.props.route.params.exercise === 'exercise'? item.image_original_path  : item.thumbnail_image_thumb_path }} style={{ height: hp(20), width: wp(40) }}></Image>
                                                    </View>
                                                </TouchableOpacity>
                                                <View style={styles.textbox}>
                                                    <Text style={[styles.headertext,{paddingLeft:this.props.route.params.exercise === 'exercise'? wp(0) : wp(3)}]}>{this.props.route.params.exercise === 'exercise'? item.title :item.title}</Text>
                                                    <Text style={styles.normaltext}>{this.props.route.params.exercise === 'exercise'? item.duration :item.description}</Text>

                                                </View>
                                            </View>



                                        </View>


                                    )}
                                />
                            </View> :

                            <View style={{marginLeft:wp(5), width:wp(90), marginTop:hp(1.5),paddingBottom:hp(14) }}>
                            
                                <FlatList
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                    data={this.props.route.params.exercise === 'exercise'?  this.state.dataSource: this.state.dataSource1}
                                    key={'#'}
                                    keyExtractor={item => "#" + item.id}
                                    numColumns={2}
                                    renderItem={({ item, index }) => (
                                        <View style={{ marginTop: 10,marginLeft:wp(1),}}>

                                            <View>
                                                <View>
                                                    
                                                    <TouchableOpacity
                                                      onPress={() => this.props.route.params.exercise === 'exercise' ? null :this.sendtomodal(item.id, item.video)}
                                                    >
                                                        
                                                        <Image source={this.props.route.params.exercise === 'exercise'? null : require('../../Assets/playwhite.png')} style={{ position: 'absolute', top: hp(11), zIndex: 999999, left: wp(18), height: hp(3), }} resizeMode="contain" />

                                                        <Image  source={{ uri:  this.props.route.params.exercise === 'exercise'? item.image_original_path  : item.thumbnail_image_thumb_path }} resizeMode="contain" style={{ height: hp(25), width: wp(43) }}></Image>
                                                    </TouchableOpacity>
                                                    <View style={{alignItems:'flex-start', justifyContent:'center', width:wp(45), }}>
                                                    <Text style={styles.headertext}>{this.props.route.params.exercise === 'exercise'? item.title :item.title}</Text>
                                                    <Text style={styles.headertext}>{this.props.route.params.exercise === 'exercise'? item.duration : item.type}</Text>
                                                 </View>
                                                   
                                                </View>

                                            </View>



                                        </View>


                                    )}
                                />
                            </View>
                    }


                    {this.state.isPrivate == true && (

                        <Modal isVisible={this.state.isVisible}>

                            <View style={{ backgroundColor: '#fff', paddingBottom: 20 }}>

                                <TouchableOpacity
                                    onPress={() => this.modelfalse()}
                                >

                                    <Text style={styles.closemodalStyle}>X</Text>

                                </TouchableOpacity>




                                <VideoPlayer
                                    video={{ uri: this.state.Video }}
                                    style={styles.equipvideo}
                                    fullScreenOnLongPress
                                    //onShowControls	={true}
                                    fullscreen={true}
                                    resizeMode="cover"
                                    controls={true}
                                    paused={false}
                                    autoplay={false}
                                    // thumbnail={{uri:item.thumbnail_image_thumb_path}}
                                    ref={(ref) => {
                                        this.player = ref
                                    }} />

                            </View>
                        </Modal>
                    )}

                </MenuProvider>



                <Footer
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}


const mapStateToProps = (getallbookmark) => {
    return {

        Allbookmark: getallbookmark.BookmarkReducer,

    }
}

export default connect(mapStateToProps, { getallbookmark }, null)(ViewExerciseDetail);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    head: {
        flexDirection: 'row',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 2,
        width: wp('100%'),
        height: 50
    },
    backicon: {
        alignContent: 'flex-start',
        marginRight: wp('30%'),
        marginTop: 12,
        marginLeft: 10,
        height: 20,
        width: 20
    },
    loginicon:
    {
        alignSelf: 'flex-end',
        marginRight: wp('5%'),
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginTop: 10
    },
    searchSection: {
        borderWidth: 1, flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        alignItems: 'center',
        borderRadius: 5, marginVertical: hp(2), width: wp(70)
    },
    input: {
        fontFamily: 'K2D-Regular',
        color: '#AFAFAF',
        fontSize: 14,
        width: wp(60)

    },
    headertext: {
        fontFamily: 'K2D-Medium',
        fontSize: 12,
        // textAlign: 'center',
        color: '#141821',
        // paddingLeft: wp(3),


    },
    deatilcontainer: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    equipimg: {

        height: 100,
        width: 100,

    },
    normaltext: {
        //  paddingTop:5,
        color: '#696D76',
        fontFamily: 'K2D-Normal',
        fontSize: 12,
       


    }, textbox: {

        width: wp('65%'),
        justifyContent: 'center'
    },
})