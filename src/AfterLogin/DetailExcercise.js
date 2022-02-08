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
    ScrollView, FlatList
} from "react-native";
import { MenuProvider } from 'react-native-popup-menu';

import React, { Component } from "react";
import PropTypes from 'prop-types'
//import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import Header from '../Components/Header/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ApiScreen } from '../Api/ApiScreen'
import AsyncStorage from "@react-native-community/async-storage";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Modal from 'react-native-modal';
import Footer from '../Components/Footer/BlackFooter'
import { getallbookmark } from "../Redux/Actions/BookmarkAction";
import { connect } from "react-redux";
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";


const RepsRotation = [{
    name: '1',
}, {
    name: '2',
},
{
    name: '3',
}, {
    name: '4',
}, {
    name: '5',
}, {
    name: '6',
}, {
    name: '7',
}, {
    name: '8',
}, {
    name: '9',
}, {
    name: '10',
}, {
    name: '11',
}, {
    name: '12',
}, {
    name: '13',
}, {
    name: '14',
}, {
    name: '15',
}, {
    name: '16',
}, {
    name: '17',
}, {
    name: '18',
}, {
    name: '19',
}, {
    name: '20',
},];

const setsRotation = [
    {
        name: '1',
    }, {
        name: '2',
    },
    {
        name: '3',
    }, {
        name: '4',
    }, {
        name: '5',
    }, {
        name: '6',
    }, {
        name: '7',
    }, {
        name: '8',
    }, {
        name: '9',
    }, {
        name: '10',
    }, {
        name: '11',
    }, {
        name: '12',
    }, {
        name: '13',
    }, {
        name: '14',
    }, {
        name: '15',
    }, {
        name: '16',
    }, {
        name: '17',
    }, {
        name: '18',
    }, {
        name: '19',
    }, {
        name: '20',
    },
];

const timeRotation = [
    {
        time: '01'
    },
    {
        time: '02'
    }, {
        time: '03'
    }, {
        time: '04'
    }, {
        time: '05'
    }, {
        time: '06'
    }, {
        time: '07'
    }, {
        time: '08'
    }, {
        time: '09'
    }, {
        time: '10'
    }, {
        time: '11'
    }, {
        time: '12'
    }, {
        time: '13'
    }, {
        time: '14'
    }, {
        time: '15'
    }, {
        time: '16'
    }, {
        time: '17'
    }, {
        time: '18'
    }, {
        time: '20'
    }, {
        time: '21'
    }, {
        time: '22'
    }, {
        time: '23'
    }, {
        time: '24'
    },
    {
        time: '25'
    },{
        time: '26'
    },{
        time: '27'
    },{
        time: '28'
    },{
        time: '29'
    },{
        time: '30'
    },{
        time: '31'
    },{
        time: '32'
    },{
        time: '33'
    },{
        time: '34'
    },{
        time: '35'
    },{
        time: '36'
    },{
        time: '37'
    },{
        time: '38'
    },{
        time: '39'
    },{
        time: '40'
    },{
        time: '41'
    },{
        time: '42'
    },{
        time: '43'
    },{
        time: '44'
    },{
        time: '45'
    },{
        time: '46'
    },{
        time: '47'
    },{
        time: '48'
    },{
        time: '49'
    },{
        time: '50'
    },{
        time: '51'
    },{
        time: '52'
    },{
        time: '53'
    },{
        time: '54'
    },{
        time: '55'
    },{
        time: '56'
    },{
        time: '57'
    },{
        time: '58'
    },{
        time: '59'
    },{
        time: '60'
    },
]

class DetailExcercise extends Component {

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
            isTrue: false,
            isRepsPrivate: false,
            isVisible: true,
            isVideo: false,
            isVideoVisible: true,
            vid: '',
            Video: '',
            bookmark: '',
            Left_duration: '',
            Spent_duration: '',
            show1: false,
            addTime: '',
            isTimePrivate:false,
            pressedOption:''
        };

    }

    // const Reps =[{
    //     name:'item 1',
    // },{
    //     name: 'item 2',
    // },
    // {
    //     name: 'item 3',
    // },{
    //     name: 'item 4',
    // }];




    Add_donor() {

        console.log('addd')
        this.setState({
            // isPrivate: true,
            isTrue: true,
        })
    }
    Add_donor2() {
        console.log('addd')
        this.setState({
            isRepsPrivate: true,
        })
    }
    Add_donor3() {
        this.setState({
            isTimePrivate: true,
        })
    }


    modelfalse = () => {

        this.setState({ isPrivate: false, isTimePrivate:false ,isRepsPrivate:false, isTrue:false})
    }


    handleBackButtonClick() {

        this.props.route.params.onGoBack();
        this.props.navigation.goBack();
        return true;

    }

    goBack = () => {

        this.props.route.params.onGoBack();
        this.props.navigation.goBack();

    }

    refresh() {

        this.componentDidMount();

    }


    modelfalse1 = async (Eid, title, img, dur) => {


        this.setState({ isPrivate: false, isTrue: false, isRepsPrivate: false })
        
        const time = this.state.addTime;
        const Duration = this.state.duration * 60;
        const Spent = this.state.Spent_duration;
        const Left = this.state.Left_duration;
        console.log('$$$$$$$$$$$$$$$$$$$', Eid, Left, Spent, Duration,time);
        const login = await AsyncStorage.getItem('login');
        //console.log("dashboard", login);

        let data = JSON.parse(login);
        console.log('#################3', data)
        this.access_token = data;

        const url = ApiScreen.base_url + ApiScreen.updatedetailexcercise
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

                        workout_exercise_id: Eid,
                        workout_exercise_reps: this.state.reps,
                        workout_exercise_sets: this.state.sets,
                        workout_exercise_actual_duration: Duration,
                        workout_exercise_spend_duration: Spent,
                        workout_exercise_left_duration: Left



                    })


            }).then(response => response.json())
            .then((responseJson) => {
                console.log('Equipment detailaa', responseJson.data.message)

                setTimeout(() => {
                    this.setState({
                        isLoading: false,
                        //  dataSource: responseJson.data.workout,
                        // id: responseJson.data.workout.id,
                        // Title: responseJson.data.workout.title,
                        // image: responseJson.data.workout.image_original_path,
                        // description: responseJson.data.workout.description,
                        // reps: responseJson.data.workout.reps,
                        // sets: responseJson.data.workout.sets,
                        // duration: parseInt(responseJson.data.workout.actual_duration /60).toString(),
                        // bookmark:responseJson.data.workout.bookmark_id

                    })
                }, 2000)
                Alert.alert("data Update Successfully");
            })
            .catch(error => console.log(error))

        // this.props.navigation.navigate('CreateWorkout',{
        //     Eid:Eid,
        //     title:title,
        //     img:img,
        //     dur:dur,
        //     onGoBack:() => this.refresh()
        // });
    }

    sendtomodal(id, video) {

        this.setState({

            isVideo: true,
            vid: id,
            Video: video

        })


    }

    Videomodelfalse() {

        this.setState({

            isVideo: false,

        })

    }

    modelfalse2 = async (Eid, title, img, dur) => {

        console.log('$$$$$$$$$$$$$$$$$$$', Eid)
        this.setState({ isPrivate: false, isTrue: false, isRepsPrivate: false })


        this.props.navigation.navigate('AddToWorkout', {
            Eid: Eid,
            title: title,
            img: img,
            dur: dur
        });

    }


    componentDidMount = async () => {


        //  this.props.getallbookmark()
        const Id = this.props.route.params.ExID;
        console.log('Id??', Id)
        this.setState({
            isLoading: true
        })



        const login = await AsyncStorage.getItem('login');
        //console.log("dashboard", login);

        let data = JSON.parse(login);
        console.log('#################3', data)
        this.access_token = data;

        const url = ApiScreen.base_url + ApiScreen.DetailExcercise
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
                console.log('Equipment detailaa', responseJson.data.workout)

                setTimeout(() => {
                    this.setState({

                        isLoading: false,
                        dataSource: responseJson.data.workout,
                        id: responseJson.data.workout.id,
                        Title: responseJson.data.workout.title,
                        image: responseJson.data.workout.image_original_path,
                        description: responseJson.data.workout.description,
                        reps: responseJson.data.workout.reps,
                        sets: responseJson.data.workout.sets,
                        duration: parseInt(responseJson.data.workout.actual_duration / 60).toString(),
                        bookmark: responseJson.data.workout.bookmark_id,
                        Left_duration: responseJson.data.workout.left_duration,
                        Spent_duration: responseJson.data.workout.spend_duration,


                    })
                }, 2000)

            })
            .catch(error => console.log(error))




        //   const url1 = ApiScreen.base_url + ApiScreen.EquipRelateExcercise
        //   console.log("url1:" + url1);
        //   fetch(url1,
        //     {
        //       method: 'POST',
        //       headers: new Headers({
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'x-access-token': this.access_token
        //         // <-- Specifying the Content-Type

        //       }),

        //       body: JSON.stringify(
        //         {

        //           id: Id,


        //         })


        //     }).then(response => response.json())
        //     .then((responseJson) => {
        //       console.log('Excercise detailaa',responseJson.data.exercises)

        //       setTimeout(() => {
        //         this.setState({

        //           isLoading: false,
        //           dataSource: responseJson.data.exercises,
        //         //   Title:responseJson.data.equipment.title,
        //         //   image:responseJson.data.equipment.image_original_path,
        //         //   description:responseJson.data.equipment.description


        //         })
        //       }, 2000)

        //     })
        //     .catch(error => console.log(error))




        // const url2 = ApiScreen.base_url + ApiScreen.ExcRelatedVedio
        // console.log("url2:" + url2);
        // fetch(url2,
        //     {
        //         method: 'POST',
        //         headers: new Headers({
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'x-access-token': this.access_token
        //             // <-- Specifying the Content-Type

        //         }),

        //         body: JSON.stringify(
        //             {

        //                 id: Id,


        //             })


        //     }).then(response => response.json())
        //     .then((responseJson) => {
        //         console.log('Excercise detailaa', responseJson.data.videos)

        //         setTimeout(() => {
        //             this.setState({

        //                 isLoading: false,
        //                 dataSource1: responseJson.data.videos,
        //                 //   Title:responseJson.data.equipment.title,
        //                 //   image:responseJson.data.equipment.image_original_path,
        //                 //   description:responseJson.data.equipment.description


        //             })

        //         }, 2000)

        //     })

        //     .catch(error => console.log(error))

    }

    bookmark = async (ExcrciseId) => {


        this.setState({
            // isLoading: true,
            bookmark: ExcrciseId
        })

        const login = await AsyncStorage.getItem('login');
        //console.log("dashboard", login);

        let data = JSON.parse(login);
        console.log('#################3', data)
        this.access_token = data;

        const Bookmark = ApiScreen.base_url + ApiScreen.bookmark
        console.log("url:" + Bookmark);
        fetch(Bookmark,
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

                        id: ExcrciseId,
                        action: "add"


                    })


            }).then(response => response.json())
            .then((responseJson) => {
                console.log('Equipment detailaa', responseJson.data)

                this.setState({ isLoading: false })
                if (responseJson.status == '1') {
                    console.log(responseJson.status)
                    // console.log("from login ",responseJson.data.user.name);


                    // Alert.alert(responseJson.data.message);
                    //  this.componentDidMount()

                    this.props.getallbookmark()
                }

                else {

                    console.log(responseJson.status)
                    const invalid = responseJson.data.error[0]
                    Alert.alert(invalid);

                }

            })
            .catch(error => console.log(error))

    }


    Unbookmark = async (ExcrciseId) => {

        this.setState({
            // isLoading: true,
            bookmark: null
        })

        const login = await AsyncStorage.getItem('login');
        //console.log("dashboard", login);

        let data = JSON.parse(login);
        console.log('#################3', data)
        this.access_token = data;

        const Bookmark = ApiScreen.base_url + ApiScreen.bookmark
        console.log("url:" + Bookmark);
        fetch(Bookmark,
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

                        id: ExcrciseId,
                        action: "remove"


                    })


            }).then(response => response.json())
            .then((responseJson) => {
                console.log('Equipment detailaa', responseJson.data)

                this.setState({ isLoading: false })

                if (responseJson.status == '1') {
                    console.log(responseJson.status)

                    //  Alert.alert(responseJson.data.message);
                    //  this.componentDidMount()
                    this.props.getallbookmark()

                }

                else {

                    console.log(responseJson.status)
                    const invalid = responseJson.data.error[0]
                    Alert.alert(invalid);

                }

            })

            .catch(error => console.log(error))
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

                    {(this.state.isLoading) &&

                        <View style={{ flex: 1, justifyContent: 'center', position: 'absolute', top: '50%', left: '40%' }}>

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

                        </View>}

                    <View style={styles.head}>
                        <View style={{ width: wp('20%') }}>
                            <TouchableOpacity
                                onPress={() => this.goBack()}
                                style={styles.button}>
                                <Image source={require('../../Assets/back.png')} style={styles.backiconTop} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: wp('60%') }}>
                            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontFamily: 'K2D-Normal', marginTop: 10, color: '#141821' }}>{this.state.Title}</Text>
                        </View>

                    </View>

                    <View>


                        <View>

                            <View style={styles.deatilcontainer}>

                                <View style={styles.imagebox}>
                                    <Image source={{ uri: this.state.image }} style={styles.equipimg}></Image>
                                </View>
                                <View style={styles.textbox}>
                                    {/* <Text style={styles.headertext}></Text> */}
                                    <Text numberOfLines={5} style={styles.normaltext}>{this.state.description}</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.cat_title}>Categories</Text>

                                <View style={styles.catData}>
                                    <View style={{ width: wp('30%') }}>
                                        <View style={{ width: 50 }}>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.replace('Home')}
                                                style={styles.button}>
                                                <Image source={require('../../Assets/heart.png')} style={styles.heart} />
                                            </TouchableOpacity>
                                            <Text style={styles.catText}>Cardio</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: wp('35%') }}>
                                        <View style={{ width: 100, }}>
                                            <TouchableOpacity

                                                style={styles.button}>
                                                <Image source={require('../../Assets/headphones.png')} style={styles.headphone} />
                                            </TouchableOpacity>
                                            <Text style={styles.catText}>Power Training</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: wp('40%') }}>
                                        <View style={{ width: 100 }}>
                                            <TouchableOpacity

                                                style={styles.button}>
                                                <Image source={require('../../Assets/sun.png')} style={styles.yoga} />
                                            </TouchableOpacity>
                                            <Text style={styles.catText}>Yoga</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                           
                            <View style={{ marginTop: 15 }}>
                                <Text style={styles.cat_title}>Training</Text>
                                <Text style={styles.recText}>Recommended Routine</Text>

                                <View style={styles.catData}>
                                    <View style={{ width: wp('15%') }}>
                                        <TouchableOpacity style={{ width: 50, marginLeft: 20 }} onPress={() => this.Add_donor2()} >

                                            <Text style={styles.TrainingText}>Reps:<Text style={[styles.TrainingText, { fontFamily: 'K2D-Bold', }]}> {this.state.reps}</Text></Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: wp('20%') }}>
                                        <TouchableOpacity onPress={() => this.Add_donor()} style={{ width: 100, }}>

                                            <Text style={styles.TrainingText}>Sets:<Text style={[styles.TrainingText, { fontFamily: 'K2D-Bold', }]}> {this.state.sets}</Text></Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: wp('30%') }}>
                                        <View style={{ width: 100 }}>
                                            <Text style={styles.TrainingText}>Weight:<Text style={[styles.TrainingText, { fontFamily: 'K2D-Bold', }]}> {this.state.duration}</Text></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: wp('30%') }}>
                                        <TouchableOpacity style={{ width: 100 }} onPress={() => this.Add_donor3()}>
                                            <Text style={[styles.TrainingText, { textAlign: 'left' }]}>Duration:<Text style={[styles.TrainingText, { fontFamily: 'K2D-Bold', }]}>{this.state.duration} mins</Text></Text>
                                        
                                        </TouchableOpacity>
                                    </View>

                                </View>



                                <FlatList

                                    data={this.state.dataSource}
                                    keyExtractor={(item, index) => index}
                                    horizontal={true}

                                    renderItem={({ item, index }) => (
                                        <View>

                                            <TouchableOpacity style={styles.deatilcontainer}
                                                onPress={() => this.props.navigation.navigate('EquipDetail', {
                                                    EquipId: item.id

                                                })}
                                            >
                                                <View style={styles.imagebox}>
                                                    <Image source={{ uri: item.image_thumb_path }} style={styles.equipimg}></Image>
                                                    <Text style={styles.headertext}>{item.title}</Text>
                                                    <Text style={styles.catText}>{item.duration}mins</Text>

                                                </View>

                                            </TouchableOpacity>

                                        </View>


                                    )}
                                />


                            </View>

                            {/* <View style={styles.buttoncontainer}>

                                <TouchableOpacity style={styles.buttonv}
                                    onPress={() => this.Add_donor()}
                                >

                                    <Text style={styles.text4}>Edit</Text>
                                </TouchableOpacity>
                            </View> */}
                            <View style={styles.buttoncontainer}>
                                <TouchableOpacity style={styles.buttonv}
                                    onPress={() => this.modelfalse1(
                                        this.state.id)}
                                >

                                    <Text style={styles.text4}>Update</Text>
                                </TouchableOpacity>
                            </View>

                            {
                                this.state.isRepsPrivate === true && (
                                    <Modal isVisible={this.state.isVisible}>

                                        <View style={{ backgroundColor: '#fff', height: hp('40%') }}>

                                            <View style={styles.head1}>
                                                <View>
                                                    <TouchableOpacity
                                                        onPress={() => this.modelfalse()}
                                                        style={styles.closemodalStyle}>
                                                        <Image source={require('../../Assets/back.png')} style={styles.backicon} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View >
                                                    <Text style={{ justifyContent: 'center', alignSelf: 'center', fontFamily: 'K2D-Normal', marginTop: 10, color: '#141821' }}>{this.state.Title}</Text>
                                                </View>

                                            </View>


                                            <View style={{ marginTop: hp(2), justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={styles.text1}>Reps</Text>
                                            </View>
                                            <View style={{justifyContent:'center', alignItems:'center', marginTop: hp(2) }}>

                                                <ScrollView style={{ height: hp(15),  }}>

                                                    {
                                                        RepsRotation.map((data) => {
                                                            return (
                                                                <View style={{ justifyContent: 'center', marginLeft: wp(3) }}>
                                                                    <TouchableOpacity onPress={(reps) => this.setState({ reps: data.name, isRepsPrivate: false })}
                                                                        style={{ height: hp(5), width: wp(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                        <Text>{data.name}</Text>
                                                                    </TouchableOpacity>
                                                                    <View style={{ height: hp(.1), width: wp(20), backgroundColor: '#E5E5E5' }} />
                                                                </View>
                                                            )
                                                        })
                                                    }
                                                </ScrollView>


                                            </View>
                                        </View>
                                    </Modal>
                                )
                            }
                            {
                                this.state.isTrue === true && (
                                    <Modal isVisible={this.state.isVisible}>

                                        <View style={{ backgroundColor: '#fff', height: hp('40%') }}>

                                            <View style={styles.head1}>
                                                <View>
                                                    <TouchableOpacity
                                                        onPress={() => this.modelfalse()}
                                                        style={styles.closemodalStyle}>
                                                        <Image source={require('../../Assets/back.png')} style={styles.backicon} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View >
                                                    <Text style={{ justifyContent: 'center', alignSelf: 'center', fontFamily: 'K2D-Normal', marginTop: 10, color: '#141821' }}>{this.state.Title}</Text>
                                                </View>

                                            </View>


                                            <View style={{ marginTop: hp(2), justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={styles.text1}>Sets</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                                <ScrollView style={{ height: hp(15), width: wp(10), }}>
                                                    {

                                                        setsRotation.map((data2, index) => {
                                                            return (
                                                                <View style={{ justifyContent: 'center', marginLeft: wp(3), alignItems: 'center' }}>
                                                                    <TouchableOpacity onPress={(sets) => this.setState({ sets: data2.name, isTrue: false })}
                                                                        style={{ height: hp(5), width: wp(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                        <Text>{data2.name}</Text>
                                                                    </TouchableOpacity>
                                                                    <View style={{ height: hp(.1), width: wp(30), backgroundColor: '#E5E5E5' }} />
                                                                </View>
                                                            )
                                                        }
                                                        )
                                                    }

                                                </ScrollView>


                                            </View>
                                        </View>
                                    </Modal>
                                )
                            }
                            {
                                this.state.isTimePrivate === true && (
                                    <Modal isVisible={this.state.isVisible}>

                                    <View style={{ backgroundColor: '#fff', height: hp('40%') }}>

                                        <View style={styles.head1}>
                                            <View>
                                                <TouchableOpacity
                                                    onPress={() => this.modelfalse()}
                                                    style={styles.closemodalStyle}>
                                                    <Image source={require('../../Assets/back.png')} style={styles.backicon} />
                                                </TouchableOpacity>
                                            </View>
                                            <View >
                                                <Text style={{ justifyContent: 'center', alignSelf: 'center', fontFamily: 'K2D-Normal', marginTop: 10, color: '#141821' }}>{this.state.Title}</Text>
                                            </View>

                                        </View>


                                        <View style={{ marginTop: hp(2), justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.text1}>Duration</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                            <ScrollView style={{ height: hp(15), width: wp(10), }}>
                                                {

                                                    timeRotation.map((data2, index) => {
                                                        return (
                                                            <View style={{ justifyContent: 'center', marginLeft: wp(3), alignItems: 'center' }}>
                                                                <TouchableOpacity onPress={(duration) => this.setState({ duration: data2.time, isTimePrivate: false })}
                                                                    style={{ height: hp(5), width: wp(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <Text>
                                                                        { data2.time}
                                                                        </Text>
                                                                </TouchableOpacity>
                                                                <View style={{ height: hp(.1), width: wp(30), backgroundColor: '#E5E5E5' }} />
                                                            </View>
                                                        )
                                                    }
                                                    )
                                                }

                                            </ScrollView>


                                        </View>
                                    </View>
                                </Modal>
                             )
                             }
                            






                        </View>



                    </View>


                    {this.state.isPrivate == true && (

                        <Modal isVisible={this.state.isVisible}>

                            <View style={{ backgroundColor: '#fff', height: hp('80%') }}>

                                <View style={styles.head1}>
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => this.modelfalse()}
                                            style={styles.closemodalStyle}>
                                            <Image source={require('../../Assets/back.png')} style={styles.backicon} />
                                        </TouchableOpacity>
                                    </View>
                                    <View >
                                        <Text style={{ justifyContent: 'center', alignSelf: 'center', fontFamily: 'K2D-Normal', marginTop: 10, color: '#141821' }}>{this.state.Title}</Text>
                                    </View>

                                </View>


                                <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
                                    <View style={{ width: wp(23), justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.text1}>Sets</Text>
                                    </View>
                                    <View style={{ width: wp(35), justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.text1}>Reps</Text>
                                    </View>
                                    <View style={{ width: wp(30), justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.text1}>Weights</Text>
                                    </View>
                                    {/* <View style={{ width: wp(22),justifyContent:'center', alignItems:'center'}}>
                                        <Text style={styles.text1}>Duration</Text>
                                    </View> */}
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                    <ScrollView style={{ height: hp(15), width: wp(10), }}>
                                        {

                                            setsRotation.map((data2, index) => {
                                                return (
                                                    <View style={{ justifyContent: 'center', marginLeft: wp(3) }}>
                                                        <TouchableOpacity onPress={(sets) => this.setState({ sets: data2.name })}
                                                            style={{ height: hp(5), width: wp(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text>{data2.name}</Text>
                                                        </TouchableOpacity>
                                                        <View style={{ height: hp(.1), width: wp(18), backgroundColor: '#E5E5E5' }} />
                                                    </View>
                                                )
                                            }
                                            )
                                        }
                                    </ScrollView>
                                    <ScrollView style={{ height: hp(15), width: wp(10) }}>

                                        {
                                            RepsRotation.map((data) => {
                                                return (
                                                    <View style={{ justifyContent: 'center', marginLeft: wp(3) }}>
                                                        <TouchableOpacity onPress={(reps) => this.setState({ reps: data.name })}
                                                            style={{ height: hp(5), width: wp(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text>{data.name}</Text>
                                                        </TouchableOpacity>
                                                        <View style={{ height: hp(.1), width: wp(20), backgroundColor: '#E5E5E5' }} />
                                                    </View>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                    <ScrollView style={{ height: hp(15), width: wp(10), }}>
                                        {

                                            setsRotation.map((data2, index) => {
                                                return (
                                                    <View style={{ justifyContent: 'center', marginLeft: wp(3) }}>
                                                        <TouchableOpacity style={{ height: hp(5), width: wp(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text>{data2.name}</Text>
                                                        </TouchableOpacity>
                                                        <View style={{ height: hp(.1), width: wp(20), backgroundColor: '#E5E5E5' }} />
                                                    </View>
                                                )
                                            }
                                            )
                                        }
                                    </ScrollView>

                                </View>
                                <View style={{ marginTop: hp(2), paddingLeft: wp(4) }}>
                                    <Text style={[styles.text1, { paddingLeft: wp(8) }]}>Duration</Text>

                                    <View style={{ flexDirection: 'row', width: wp(30), justifyContent: 'center', alignItems: 'center' }}>
                                        <ScrollView style={{ height: hp(15) }}>

                                            {
                                                RepsRotation.map((data) => {
                                                    return (
                                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <TouchableOpacity onPress={() => this.setState({ duration: data.name })} style={{ height: hp(5), width: wp(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text>{data.name}</Text>
                                                            </TouchableOpacity>
                                                            <View style={{ height: hp(.1), width: wp(12), backgroundColor: '#E5E5E5', marginLeft: wp(1) }} />
                                                        </View>
                                                    )
                                                })
                                            }
                                        </ScrollView>
                                        <Text>:</Text>
                                        <ScrollView style={{ height: hp(15), }}>

                                            {
                                                MinutesRotation.map((data) => {
                                                    return (
                                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <TouchableOpacity
                                                                style={{ height: hp(5), width: wp(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text>{data.time}</Text>
                                                            </TouchableOpacity>
                                                            <View style={{ height: hp(.1), width: wp(12), backgroundColor: '#E5E5E5', marginLeft: wp(1) }} />
                                                        </View>
                                                    )
                                                })
                                            }
                                        </ScrollView>
                                    </View>

                                </View>


                                <View style={styles.deatilcontainer1}

                                >

                                    {/* <View style={styles.textbox1}>


                                     {/* <Text style={styles.headertext}>{this.state.reps}</Text>  
                                    <Text  numberOfLines={5} style={styles.normaltext}>{parseInt(this.state.duration/60)}</Text>


                                </View> */}



                                    {/* <View style={styles.searchSection}>
                                        <Text style={styles.text1}>Sets</Text>
                                        <TextInput
                                            onChangeText={(sets) => this.setState({ sets })}
                                            value={this.state.sets}
                                            keyboardType="numeric"
                                            placeholder="Enter number of Sets"
                                            style={styles.input}
                                        >
                                        </TextInput>

                                    </View>

                                    <View style={styles.searchSection}>
                                        <Text style={styles.text1}>Reps</Text>
                                        <TextInput
                                            onChangeText={(reps) => this.setState({ reps })}
                                            value={this.state.reps}
                                            keyboardType="numeric"
                                            placeholder="Enter number of Reps"
                                            style={styles.input}
                                        >
                                        </TextInput>

                                    </View>

                                    <View style={styles.searchSection}>
                                        <Text style={styles.text1}>Duration in minutes</Text>
                                        <TextInput
                                            onChangeText={(duration) => this.setState({ duration })}
                                            value={this.state.duration}
                                            keyboardType="numeric"
                                            placeholder="Eenter duration"
                                            style={styles.input}
                                        >
                                        </TextInput>

                                    </View> */}
                                </View>

                                <View style={[styles.buttoncontainer1, { marginTop: hp(3) }]}>

                                    <TouchableOpacity style={styles.buttonv1}
                                        onPress={() => this.modelfalse1(
                                            this.state.id)}
                                    >

                                        <Text style={styles.text4}>Update</Text>
                                    </TouchableOpacity>


                                    {/* <TouchableOpacity style={styles.whitebtn1}
                                   onPress={() => this.modelfalse2(
                                    this.state.id,this.state.Title,this.state.image,this.state.duration)}
                                >

                                    <Text style={styles.text5}>Add to Workout</Text>

                                </TouchableOpacity> */}

                                </View>


                            </View>
                        </Modal>
                    )}



                    {this.state.isVideo == true && (

                        <Modal isVisible={this.state.isVideoVisible}>

                            <View style={{ backgroundColor: '#fff', paddingBottom: 20 }}>

                                <TouchableOpacity
                                    onPress={() => this.Videomodelfalse()}
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



                    <Footer
                        navigation={this.props.navigation}
                    />
                </MenuProvider>
            </View>
        )
    }
}


const mapStateToProps = (getallbookmark) => {
    return {

        Allbookmark: getallbookmark.BookmarkReducer,


    }
}

export default connect(mapStateToProps, { getallbookmark }, null)(DetailExcercise);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    catText: {
        fontFamily: 'K2D-Normal',
        fontSize: 12,
        color: '#B9B9B9',
        textAlign: 'center',
        paddingTop: 5


    },
    text4: {
        textAlign: 'center',
        color: '#fff'
    },
    text5: {
        textAlign: 'center',
        color: '#1474F0'
    },

    recText: {

        fontFamily: 'K2D-Normal',
        fontSize: 12,
        color: '#B9B9B9',
        //  textAlign:'center',
        paddingTop: 5,
        paddingLeft: 18
    },
    backicon: {

        alignContent: 'flex-start',
        marginRight: wp('30%'),
        marginTop: 12,
        marginLeft: 10,
        height: 20,
        width: 20
    },

    backiconTop: {

        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 12,
        marginLeft: 10,
        height: 20,
        width: 20

    },

    TrainingText: {
        fontFamily: 'K2D-Normal',
        fontSize: 12,
        // color:'#B9B9B9',
        textAlign: 'center',
        paddingTop: 5


    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    bottom: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        borderTopColor: '#E5E5E5',
        borderTopWidth: 1,
        width: wp('100%'),
        height: 50
    },

    cat_title: {
        fontFamily: 'K2D-Normal',
        fontSize: 16,
        paddingLeft: 20
    },

    head1: {

        flexDirection: 'row',
        //position:'absolute',
        //bottom:0,
        // borderBottomColor: '#E5E5E5',
        // borderBottomWidth: 2,
        width: wp('100%'),
        height: 50
    },

    head: {
        flexDirection: 'row',
        //position:'absolute',
        //bottom:0,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 2,
        width: wp('100%'),
        height: 50
    },

    buttonv: {

        backgroundColor: '#1474F0',
        padding: 10,
        width: wp('40%'),
    },
    text1: {
        padding: 5,
        fontFamily: 'K2D-Normal',
    },


    whitebtn: {
        width: wp('40%'),
        padding: 10,
        borderWidth: 1,
        borderColor: '#1474F0',
        marginLeft: 20

    },

    buttonv1: {

        backgroundColor: '#1474F0',
        padding: 10,
        width: wp('80%'),

    },

    whitebtn1: {
        width: wp('80%'),
        padding: 10,
        borderWidth: 1,
        borderColor: '#1474F0',
        marginTop: 10


    },

    catData: {
        flexDirection: 'row',
        //position:'absolute',
        //bottom:0,
        paddingTop: 15,
        width: wp('90%'),
        alignSelf: 'center',

        height: 50
    },

    // whitebtn:{
    //     width:wp('25%'),
    //     paddingBottom:10,
    //   //  borderBottomWidth:1,
    //     borderColor:'#1474F0',
    //     marginLeft:20

    // },

    button1: {
        width: wp('25%'),
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#1474F0',

    },


    image: {

        height: hp('60%'),
        resizeMode: "contain",


    },
    normaltext: {
        paddingTop: 5,
        color: '#696D76',
        fontFamily: 'K2D-Normal',
        fontSize: 12

    },
    equipimg: {
        height: 90,
        width: 90,
        // resizeMode:'contain'


    },
    equipimg1: {
        height: hp('30%'),
        width: wp('85%'),
        alignSelf: 'center',
        padding: 10,
        resizeMode: 'contain'


    },
    deatilcontainer: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 20
    },
    buttoncontainer: {
        flexDirection: 'row',
        paddingTop: 10,
        //paddingLeft:20,
        alignSelf: 'center'
    },

    buttoncontainer1: {
        //flexDirection: 'row',
        paddingTop: 10,
        //paddingLeft:20,
        alignSelf: 'center'
    },
    imagebox: {

    },
    textbox: {

        width: wp('60%'),
        paddingLeft: 20
    },
    textbox1: {

        // width: wp('85%'),
        textAlign: 'center',
        padding: 10
    },
    headertext: {
        fontFamily: 'K2D-Normal',
        fontSize: 12,
        textAlign: 'center',
        color: '#141821',


    },
    scan: {
        alignSelf: 'center',
        height: 65,
        width: 65,

        bottom: 30,
        resizeMode: 'contain'
    },
    homeicon: {

        alignContent: 'flex-start',
        marginRight: wp('30%'),
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginTop: 10,
        marginLeft: 10
    },

    loginicon: {
        alignSelf: 'flex-end',
        marginRight: 20,
        height: 30,
        //justifyContent:'space-between',
        width: 30,
        //justifyContent:'flex-end',
        resizeMode: 'contain',

        marginTop: 10,

    },
    fundlefttext: {

        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#CB3A3F',
        width: wp('45%'),

    },

    heart: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    headphone: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        alignSelf: 'center',

    },
    yoga: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    fundrighttext: {
        color: '#5F5F5F',
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'right',
        fontSize: 16,
        width: wp('45%'),


    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',

        padding: 10
    },

    logo: {
        resizeMode: 'cover',
        //height:100,
        //width:100,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    homebanner: {
        //resizeMode:'center',
        height: hp('30%'),
        width: wp('70%'),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    logoblock: {
        marginTop: 20
    },

    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    },
    searchSection: {

        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10

    },

    input: {
        borderWidth: 1,
        borderColor: '#E5E5E5',
        // width:wp('90%'),
        fontFamily: 'K2D-Regular',
        paddingLeft: 10,
        color: '#AFAFAF'

    },




})