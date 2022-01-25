import { GET_WORKOUT } from './type';
import { SCHEDULED_WORKOUT } from './type';
import { FINISHED_WORKOUT } from './type';
import { WORKOUT_DETAIL } from './type';
import { GET_WORKOUT_EXERCISES } from './type';
import AsyncStorage from '@react-native-community/async-storage';

import { ApiScreen } from "../../Api/ApiScreen";


const AllWorkouts = ApiScreen.base_url + ApiScreen.AllWorkouts;
const sheduledList = ApiScreen.base_url + ApiScreen.sheduledList;
const FinishWorkoutList = ApiScreen.base_url + ApiScreen.FinishWorkoutList;
const WorkoutDetail = ApiScreen.base_url + ApiScreen.WorkoutDetail;
const GetWorkoutexercise = ApiScreen.base_url + ApiScreen.GetWorkoutexercise   
                    

const getApiKey = async () => {

    return await  await AsyncStorage.getItem('login');
  };

  export const getworkout= () => {

   // console.log('Allworkoutssssssssssssss',AllWorkouts);

    return async (dispatch, getState) => {
        const login = await getApiKey();
   //   console.log('//////',login);
         let data = JSON.parse(login);
         authtoken =  data;
       //  console.log("******",authtoken);
  
        await fetch(AllWorkouts,{
  
              method:'POST',
              headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': authtoken
               
      
              }),
      
              body: JSON.stringify(
                {
      
                  "title":"",
                  "is_archived":"0",
                  "start":"0",
                  "length":"10"
      
                })
           
  
          }).then(response => response.json())
          .then((responseJson) => {
           
            //  console.log(responseJson.data.workouts,'Allworkput?????????????????')
  
          return dispatch({

            type: GET_WORKOUT,
            workout: responseJson.data.workouts
  
          });
     
        });
      };

  }


  export const scheduledworkout= () => {
  // console.log('Allworkoutssssssssssssss',AllWorkouts);
     return async (dispatch, getState) => {
         const login = await getApiKey();
       //   console.log('//////',login);
          let data = JSON.parse(login);
          authtoken =  data;
        //  console.log("******",authtoken);
         await fetch(sheduledList,{
   
               method:'POST',
               headers: new Headers({
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'x-access-token': authtoken
                
       
               }),
       
               body: JSON.stringify(
                {
      
                  title:"",
                  is_archived:"0",
                  is_finished:"0",
                  start:"0",
                  length:"10"
      
                })
   
           }).then(response => response.json())
           .then((responseJson) => {
             //  console.log(responseJson.data.workouts,'Scheduled workput?????????????????')
              return dispatch({
             type: SCHEDULED_WORKOUT,
             scheduledworkout: responseJson.data.workouts
           });
         });
       };
   }



   export const finishedworkout= () => {
    // console.log('Allworkoutssssssssssssss',AllWorkouts);
     return async (dispatch, getState) => {
         const login = await getApiKey();
   
       //   console.log('//////',login);
          let data = JSON.parse(login);
          authtoken =  data;
        //  console.log("******",authtoken);
   
         await fetch(FinishWorkoutList,{
   
               method:'POST',
               headers: new Headers({
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'x-access-token': authtoken
                
       
               }),
       
               body: JSON.stringify(
                {
      
                  title:"",
                  is_archived:"0",
                  is_finished:"1",
                  start:"0",
                  length:"10"
      
                })
   
           }).then(response => response.json())
           .then((responseJson) => {
            
               console.log(responseJson.data.workouts,'Finished workput?????????????????')
   
           return dispatch({
             type: FINISHED_WORKOUT,
             finishedworkout: responseJson.data.workouts
   
           });
         });
       };
   }


   
   export const GetWorkoutDetail= (Id) => {

     console.log('workoutssssssssssssssDetail',Id);
 
 
     return async (dispatch, getState) => {
         const login = await getApiKey();
   
       //   console.log('//////',login);
          let data = JSON.parse(login);
          authtoken =  data;
        //  console.log("******",authtoken);
   
         await fetch(WorkoutDetail,{
   
               method:'POST',
               headers: new Headers({
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'x-access-token': authtoken
                
       
               }),
       
               body: JSON.stringify(
                {

                    id: Id,


                })
   
           }).then(response => response.json())
           .then((responseJson) => {
            
               console.log(responseJson.data.workout.id,responseJson.data.workout.title,' workout detail?????????????????')
   
           return dispatch({
             type: WORKOUT_DETAIL,
             workoutdetail:responseJson.data.workout,
            //  workoutid: responseJson.data.workout.id,
            //  workouttitle: responseJson.data.workout.title
   
           });
       
  
         });
       };
 
   }

 
   export const GetWorkoutexercises= (Id) => {

    console.log('workoutsssssssssssss',Id);


    return async (dispatch, getState) => {
        const login = await getApiKey();
  
      //   console.log('//////',login);
         let data = JSON.parse(login);
         authtoken =  data;
       //  console.log("******",authtoken);
  
        await fetch(GetWorkoutexercise,{
  
              method:'POST',
              headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': authtoken
          }),
      
              body: JSON.stringify(
               {

                   id: Id,


               })
  
          }).then(response => response.json())
          .then((responseJson) => {
           
              console.log(responseJson.data.exercises,' workout exercises ?????????????????')
  
          return dispatch({
            type: GET_WORKOUT_EXERCISES,
            workoutexercises:responseJson.data.exercises,
          
  
          });
      });
      };

  }


   
