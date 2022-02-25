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
import ReadMore from 'react-native-read-more-text';


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
    }, {
        time: '26'
    }, {
        time: '27'
    }, {
        time: '28'
    }, {
        time: '29'
    }, {
        time: '30'
    }, {
        time: '31'
    }, {
        time: '32'
    }, {
        time: '33'
    }, {
        time: '34'
    }, {
        time: '35'
    }, {
        time: '36'
    }, {
        time: '37'
    }, {
        time: '38'
    }, {
        time: '39'
    }, {
        time: '40'
    }, {
        time: '41'
    }, {
        time: '42'
    }, {
        time: '43'
    }, {
        time: '44'
    }, {
        time: '45'
    }, {
        time: '46'
    }, {
        time: '47'
    }, {
        time: '48'
    }, {
        time: '49'
    }, {
        time: '50'
    }, {
        time: '51'
    }, {
        time: '52'
    }, {
        time: '53'
    }, {
        time: '54'
    }, {
        time: '55'
    }, {
        time: '56'
    }, {
        time: '57'
    }, {
        time: '58'
    }, {
        time: '59'
    }, {
        time: '60'
    },
]
const weightRotaion = [
    {
        weight: '1 kg'
    },
    {
        weight: '1.5 kg'
    }, {
        weight: '2 kg'
    }, {
        weight: '2.5 kg'
    }, {
        weight: '3 kg'
    }, {
        weight: '3.5 kg'
    }, {
        weight: '4 kg'
    }, {
        weight: '4.5 kg'
    }, {
        weight: '5 kg'
    }, {
        weight: '5.5 kg'
    }, {
        weight: '6 kg'
    }, {
        weight: '6.5 kg'
    }, {
        weight: '7 kg'
    }, {
        weight: '7.5 kg'
    }, {
        weight: '8 kg'
    }, {
        weight: '8.5 kg'
    }, {
        weight: '9 kg'
    }, {
        weight: '9.5 kg'
    }, {
        weight: '10 kg'
    }, {
        weight: '10.5 kg'
    }, {
        weight: '11 kg'
    }, {
        weight: '11.5 kg'
    }, {
        weight: '12 kg'
    }, {
        weight: '12.5 kg'
    }, {
        weight: '13 kg'
    }, {
        weight: '13.5 kg'
    }, {
        weight: '14 kg'
    }, {
        weight: '14.5 kg'
    }, {
        weight: '15 kg'
    }, {
        weight: '15.5 kg'
    }, {
        weight: '16 kg'
    }, {
        weight: '16.5 kg'
    }, {
        weight: '17 kg'
    }, {
        weight: '17.5 kg'
    }, {
        weight: '18 kg'
    }, {
        weight: '18.5 kg'
    }, {
        weight: '19 kg'
    }, {
        weight: '19.5 kg'
    }, {
        weight: '20 kg'
    }, {
        weight: '20.5 kg'
    }, {
        weight: '21 kg'
    }, {
        weight: '21.5 kg'
    }, {
        weight: '22 kg'
    }, {
        weight: '22.5 kg'
    }, {
        weight: '23 kg'
    }, {
        weight: '23.5 kg'
    }, {
        weight: '24 kg'
    }, {
        weight: '24.5 kg'
    }, {
        weight: '25 kg'
    }, {
        weight: '25.5 kg'
    }, {
        weight: '26 kg'
    }, {
        weight: '26.5 kg'
    }, {
        weight: '27 kg'
    }, {
        weight: '27.5 kg'
    }, {
        weight: '28 kg'
    }, {
        weight: '28.5 kg'
    }, {
        weight: '29 kg'
    }, {
        weight: '29.5 kg'
    }, {
        weight: '30 kg'
    }, {
        weight: '30.5 kg'
    }, {
        weight: '31 kg'
    }, {
        weight: '31.5 kg'
    }, {
        weight: '32 kg'
    }, {
        weight: '32.5 kg'
    }, {
        weight: '33 kg'
    }, {
        weight: '33.5 kg'
    }, {
        weight: '34 kg'
    }, {
        weight: '34.5 kg'
    }, {
        weight: '35 kg'
    }, {
        weight: '35.5 kg'
    }, {
        weight: '36 kg'
    }, {
        weight: '36.5 kg'
    }, {
        weight: '37 kg'
    }, {
        weight: '37.5 kg'
    }, {
        weight: '38 kg'
    }, {
        weight: '38.5 kg'
    }, {
        weight: '39 kg'
    }, {
        weight: '39.5 kg'
    }, {
        weight: '40 kg'
    }, {
        weight: '40.5 kg'
    }, {
        weight: '41 kg'
    }, {
        weight: '41.5 kg'
    }, {
        weight: '42 kg'
    }, {
        weight: '42.5 kg'
    }, {
        weight: '43 kg'
    }, {
        weight: '43.5 kg'
    }, {
        weight: '44 kg'
    }, {
        weight: '44.5 kg'
    }, {
        weight: '45 kg'
    }, {
        weight: '45.5 kg'
    }, {
        weight: '46 kg'
    }, {
        weight: '46.5 kg'
    }, {
        weight: '47 kg'
    }, {
        weight: '47.5 kg'
    }, {
        weight: '48 kg'
    }, {
        weight: '48.5 kg'
    }, {
        weight: '49 kg'
    }, {
        weight: '49.5 kg'
    }, {
        weight: '50 kg'
    }, {
        weight: '50.5 kg'
    }, {
        weight: '51 kg'
    }, {
        weight: '51.5 kg'
    }, {
        weight: '52 kg'
    }, {
        weight: '52.5 kg'
    }, {
        weight: '53 kg'
    }, {
        weight: '53.5 kg'
    }, {
        weight: '54 kg'
    }, {
        weight: '54.5 kg'
    }, {
        weight: '55 kg'
    }, {
        weight: '55.5 kg'
    }, {
        weight: '56 kg'
    }, {
        weight: '56.5 kg'
    }, {
        weight: '57 kg'
    }, {
        weight: '57.5 kg'
    }, {
        weight: '58 kg'
    }, {
        weight: '58.5 kg'
    }, {
        weight: '59 kg'
    }, {
        weight: '59.5 kg'
    }, {
        weight: '60 kg'
    }, {
        weight: '60.5 kg'
    }, {
        weight: '61 kg'
    }, {
        weight: '61.5 kg'
    }, {
        weight: '62 kg'
    }, {
        weight: '62.5 kg'
    }, {
        weight: '63 kg'
    }, {
        weight: '63.5 kg'
    }, {
        weight: '64 kg'
    }, {
        weight: '64.5 kg'
    }, {
        weight: '65 kg'
    }, {
        weight: '65.5 kg'
    }, {
        weight: '66 kg'
    }, {
        weight: '66.5 kg'
    }, {
        weight: '67 kg'
    }, {
        weight: '67.5 kg'
    }, {
        weight: '68 kg'
    }, {
        weight: '68.5 kg'
    }, {
        weight: '69 kg'
    }, {
        weight: '69.5 kg'
    }, {
        weight: '70 kg'
    }, {
        weight: '70.5 kg'
    }, {
        weight: '71 kg'
    }, {
        weight: '71.5 kg'
    }, {
        weight: '72 kg'
    }, {
        weight: '72.5 kg'
    }, {
        weight: '73 kg'
    }, {
        weight: '73.5 kg'
    }, {
        weight: '74 kg'
    }, {
        weight: '74.5 kg'
    }, {
        weight: '75 kg'
    }, {
        weight: '75.5 kg'
    }, {
        weight: '76 kg'
    }, {
        weight: '76.5 kg'
    }, {
        weight: '77 kg'
    }, {
        weight: '77.5 kg'
    }, {
        weight: '78 kg'
    }, {
        weight: '78.5 kg'
    }, {
        weight: '79 kg'
    }, {
        weight: '79.5 kg'
    }, {
        weight: '80 kg'
    }, {
        weight: '80.5 kg'
    }, {
        weight: '81 kg'
    }, {
        weight: '81.5 kg'
    }, {
        weight: '82 kg'
    }, {
        weight: '82.5 kg'
    }, {
        weight: '83 kg'
    }, {
        weight: '83.5 kg'
    }, {
        weight: '84 kg'
    }, {
        weight: '84.5 kg'
    }, {
        weight: '85 kg'
    }, {
        weight: '85.5 kg'
    }, {
        weight: '86 kg'
    }, {
        weight: '86.5 kg'
    }, {
        weight: '87 kg'
    }, {
        weight: '87.5 kg'
    }, {
        weight: '88 kg'
    }, {
        weight: '88.5 kg'
    }, {
        weight: '89 kg'
    }, {
        weight: '89.5 kg'
    }, {
        weight: '90 kg'
    }, {
        weight: '90.5 kg'
    }, {
        weight: '91 kg'
    }, {
        weight: '91.5 kg'
    }, {
        weight: '92 kg'
    }, {
        weight: '92.5 kg'
    }, {
        weight: '93 kg'
    }, {
        weight: '93.5 kg'
    }, {
        weight: '94 kg'
    }, {
        weight: '94.5 kg'
    }, {
        weight: '95 kg'
    }, {
        weight: '95.5 kg'
    }, {
        weight: '96 kg'
    }, {
        weight: '96.5 kg'
    }, {
        weight: '97 kg'
    }, {
        weight: '97.5 kg'
    }, {
        weight: '98 kg'
    }, {
        weight: '98.5 kg'
    }, {
        weight: '99 kg'
    }, {
        weight: '99.5 kg'
    }, {
        weight: '100 kg'
    }, {
        weight: '100.5 kg'
    }, {
        weight: '101 kg'
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
            isTimePrivate: false,
            pressedOption: '',
            weight: '',
            isWeight: false,
        };

    }


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
    Add_donor4() {
        this.setState({
            isWeight: true
        })
    }


    modelfalse = () => {

        this.setState({ isPrivate: false, isTimePrivate: false, isRepsPrivate: false, isTrue: false, isWeight: false })
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


    modelfalse1 = async (Eid, reps, title, img, dur) => {

        this.setState({ isPrivate: false, isTrue: false, isRepsPrivate: false, isWeight: false })
        const time = this.state.addTime;
        const Duration = this.state.duration * 60;
        const Spent = this.state.Spent_duration;
        const Left = this.state.Left_duration;
        console.log('$$$$$$$$$$$$$$$$$$$', Eid, Left, Spent, Duration, time);
        const login = await AsyncStorage.getItem('login');
        //console.log("dashboard", login);

        let data = JSON.parse(login);
        console.log('#################3', data)
        this.access_token = data;

        const url = ApiScreen.base_url + ApiScreen.updatedetailexcercise
        console.log("url:" + url);
        console.log('dataaaaaaaaaa', Eid, this.state.reps, this.state.sets, Duration, Spent, Left)

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
                console.log('Equipment detailaa', responseJson)
                if (responseJson.status === "1") {
                    Alert.alert(responseJson.data.message)
                    // Alert.alert("data Update Successfully");
                } else {
                    Alert.alert(responseJson.data.error[0])
                    Alert.alert('Please Update the data ')
                }
                // if(responseJson.data.message === 'Success') {
                //     Alert.alert("data Update Successfully");
                // }else{
                //     Alert.alert('Please Update the data ')
                // }
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
        this.setState({ isPrivate: false, isTrue: false, isRepsPrivate: false, isWeight: false })


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


    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: '#1474F0', fontSize: 12, fontFamily: 'K2D-Normal', marginTop: 3, justifyContent: 'flex-end', textAlign: 'right' }} onPress={handlePress}>
                See more
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: '#1474F0', fontSize: 12, fontFamily: 'K2D-Normal', marginTop: 3, textAlign: 'right' }} onPress={handlePress}>
                Show less
            </Text>
        );
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
                    <View style={{ flex: 0.9,}}>
                       
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
                        <ScrollView>
                        <View>


                            <View>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={{ uri: this.state.image }} style={styles.equipimg}></Image>
                                </View>
                                {/* <View style={styles.deatilcontainer}> */}


                                {/* <View style={styles.textbox}> */}
                                {/* <Text style={styles.headertext}></Text> */}
                                {/* <Text numberOfLines={5} style={styles.normaltext}>{this.state.description}</Text> */}
                                {/* </View> */}
                                {/* </View> */}

                                <View style={{ marginTop: 20 }}>
                                    <Text style={styles.cat_title}>Description</Text>
                                    <View style={{ marginLeft: wp(5), width: wp('90%'), marginTop: hp(2) }}>
                                        <ReadMore
                                            numberOfLines={5}
                                            renderTruncatedFooter={this._renderTruncatedFooter}
                                            renderRevealedFooter={this._renderRevealedFooter}
                                            onReady={this._handleTextReady}>
                                            <Text style={styles.normaltext}>
                                                {this.state.description}
                                            </Text>
                                        </ReadMore>
                                    </View>
                                </View>

                                {/* <View style={{ marginTop: 20 }}>
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
                            </View> */}


                                <View style={{ marginTop: 15 }}>
                                    <Text style={styles.cat_title}>Training</Text>
                                    <Text style={styles.recText}>Recommended Routine</Text>


                                    <View style={{ marginLeft: wp(2), flexDirection: 'row', marginTop: hp(3) }}>
                                        <TouchableOpacity onPress={() => this.Add_donor2()} style={{ backgroundColor: '#1474F0', width: wp(18), paddingVertical: hp(1), justifyContent: 'center', alignItems: 'center', }}>
                                            <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'K2D-Normal' }}>Reps : {this.state.reps}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.Add_donor()} style={{ backgroundColor: '#1474F0', marginLeft: wp(2), width: wp(18), paddingVertical: hp(1), justifyContent: 'center', alignItems: 'center', }}>
                                            <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'K2D-Normal' }}>Sets : {this.state.sets}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.Add_donor4()} style={{ backgroundColor: '#1474F0', marginLeft: wp(2), width: wp(25), paddingVertical: hp(1), justifyContent: 'center', alignItems: 'center', }}>
                                            <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'K2D-Normal' }}>Weight : {this.state.weight === '' ? '10' : this.state.weight}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.Add_donor3()} style={{ backgroundColor: '#1474F0', marginLeft: wp(2), width: wp(30), paddingVertical: hp(1), justifyContent: 'center', alignItems: 'center', }}>
                                            <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'K2D-Normal' }}>Duration : {this.state.duration} mins</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* <View style={styles.catData}>
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
                                        <TouchableOpacity style={{ width: 100 }} onPress={() => this.Add_donor4()}>
                                            <Text style={styles.TrainingText}>Weight:<Text style={[styles.TrainingText, { fontFamily: 'K2D-Bold', }]}> {this.state.weight}</Text></Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: wp('30%') }}>
                                        <TouchableOpacity style={{ width: 100 }} onPress={() => this.Add_donor3()}>
                                            <Text style={[styles.TrainingText, { textAlign: 'left' }]}>Duration:<Text style={[styles.TrainingText, { fontFamily: 'K2D-Bold', }]}>{this.state.duration} mins</Text></Text>

                                        </TouchableOpacity>
                                    </View>

                                </View> */}



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
                                            this.state.id, this.state.reps, this.state.sets, this.state.duration)}
                                    >

                                        <Text style={styles.text4}>Update</Text>
                                    </TouchableOpacity>
                                </View>

                                {
                                    this.state.isRepsPrivate === true && (
                                        <Modal isVisible={this.state.isVisible}>

                                            <View style={{ backgroundColor: '#fff', height: hp('40%'), width: wp('60%'), justifyContent: 'center', marginLeft: wp('15%') }}>

                                                <View style={styles.head1}>
                                                    <View>
                                                        <TouchableOpacity
                                                            onPress={() => this.modelfalse()}
                                                            style={styles.closemodalStyle}>
                                                            <Image source={require('../../Assets/back.png')} style={styles.backicon} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: wp('40%') }}>
                                                        <Text style={{ fontFamily: 'K2D-Normal', marginTop: 10, color: '#141821', textAlign: 'center' }}>{this.state.Title}</Text>
                                                    </View>

                                                </View>


                                                <View style={{ marginTop: hp(2), justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={[styles.text1, { color: '#1474F0' }]}>Select the reps</Text>
                                                </View>
                                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(2) }}>

                                                    <ScrollView style={{ height: hp(15), }}>

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

                                            {/* <View style={{ backgroundColor: '#fff', height: hp('40%') }}> */}
                                            <View style={{ backgroundColor: '#fff', height: hp('40%'), width: wp('60%'), justifyContent: 'center', marginLeft: wp('15%') }}>

                                                <View style={styles.head1}>
                                                    <View>
                                                        <TouchableOpacity
                                                            onPress={() => this.modelfalse()}
                                                            style={styles.closemodalStyle}>
                                                            <Image source={require('../../Assets/back.png')} style={styles.backicon} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: wp('40%') }}>
                                                        <Text style={{ fontFamily: 'K2D-Normal', marginTop: 10, color: '#141821', textAlign: 'center' }}>{this.state.Title}</Text>
                                                    </View>

                                                </View>


                                                <View style={{ marginTop: hp(2), justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={[styles.text1, { color: '#1474F0' }]}>Select the Sets</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                                    <ScrollView style={{ height: hp(15), }}>
                                                        {

                                                            setsRotation.map((data2, index) => {
                                                                return (
                                                                    <View style={{ justifyContent: 'center', marginLeft: wp(3), alignItems: 'center' }}>
                                                                        <TouchableOpacity onPress={(sets) => this.setState({ sets: data2.name, isTrue: false })}
                                                                            style={{ height: hp(5), width: wp(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
                                            </View>
                                        </Modal>
                                    )
                                }
                                {
                                    this.state.isWeight === true && (
                                        <Modal isVisible={this.state.isVisible}>

                                            {/* <View style={{ backgroundColor: '#fff', height: hp('40%') }}> */}
                                            <View style={{ backgroundColor: '#fff', height: hp('40%'), width: wp('60%'), justifyContent: 'center', marginHorizontal: wp('15%') }}>

                                                <View style={styles.head1}>
                                                    <View>
                                                        <TouchableOpacity
                                                            onPress={() => this.modelfalse()}
                                                            style={styles.closemodalStyle}>
                                                            <Image source={require('../../Assets/back.png')} style={styles.backicon} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: wp('40%') }}>
                                                        <Text style={{ fontFamily: 'K2D-Normal', marginTop: 10, color: '#141821', textAlign: 'center' }}>{this.state.Title}</Text>
                                                    </View>

                                                </View>


                                                <View style={{ marginTop: hp(2), justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={[styles.text1, { color: '#1474F0' }]}>Select the Weight</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                                    <ScrollView style={{ height: hp(15), width: wp(10), }}>
                                                        {

                                                            weightRotaion.map((data2, index) => {
                                                                return (
                                                                    <View style={{ justifyContent: 'center', marginLeft: wp(0), alignItems: 'center' }}>
                                                                        <TouchableOpacity onPress={(duration) => this.setState({ weight: data2.weight, isWeight: false })}
                                                                            style={{ height: hp(5), width: wp(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                            <Text>
                                                                                {data2.weight}
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                        <View style={{ height: hp(.1), width: wp(20), backgroundColor: '#E5E5E5' }} />
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

                                            {/* <View style={{ backgroundColor: '#fff', height: hp('40%') }}> */}
                                            <View style={{ backgroundColor: '#fff', height: hp('40%'), width: wp('60%'), justifyContent: 'center', marginLeft: wp('15%') }}>

                                                <View style={styles.head1}>
                                                    <View>
                                                        <TouchableOpacity
                                                            onPress={() => this.modelfalse()}
                                                            style={styles.closemodalStyle}>
                                                            <Image source={require('../../Assets/back.png')} style={styles.backicon} />
                                                        </TouchableOpacity>
                                                    </View>

                                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: wp('40%') }}>
                                                        <Text style={{ fontFamily: 'K2D-Normal', marginTop: 10, color: '#141821', textAlign: 'center' }}>{this.state.Title}</Text>
                                                    </View>

                                                </View>


                                                <View style={{ marginTop: hp(2), justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={[styles.text1, { color: '#1474F0' }]}>Select the Duration</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                                    <ScrollView style={{ height: hp(15), width: wp(10), }}>
                                                        {

                                                            timeRotation.map((data2, index) => {
                                                                return (
                                                                    <View style={{ justifyContent: 'center', marginLeft: wp(0), alignItems: 'center' }}>
                                                                        <TouchableOpacity onPress={(duration) => this.setState({ duration: data2.time, isTimePrivate: false })}
                                                                            style={{ height: hp(5), width: wp(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                            <Text>
                                                                                {data2.time}
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                        <View style={{ height: hp(.1), width: wp(20), backgroundColor: '#E5E5E5' }} />
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
                    </ScrollView>
                    </View>
                    <View style={{ flex: 0.1, justifyContent: 'flex-end', }}>
                        <Footer
                            navigation={this.props.navigation}
                        />
                    </View>
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
        marginRight: wp('3%'),
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
        // width: wp('100%'),
        // backgroundColor:'red',
        marginTop: -hp(4)
        // height: 50

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
        width: wp('90%'),
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
        // paddingTop: 5,
        // color: '#696D76',
        // fontFamily: 'K2D-Normal',
        // fontSize: 12
        color: '#696D76',
        fontFamily: 'K2D-Normal',
        fontSize: 12,
        textAlign: 'justify',
        lineHeight: 20

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
        paddingTop: hp(10),
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