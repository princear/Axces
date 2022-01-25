import { GET_EQUIPMENT } from "./type";
import AsyncStorage from '@react-native-community/async-storage';

import { ApiScreen } from "../../Api/ApiScreen";

const EquipmentList = ApiScreen.base_url + ApiScreen.EquipmentList;

const getApiKey = async () => {

    return await AsyncStorage.getItem('login');
  
  };


  export const getequipment = () => {

    console.log('equipmentssssssssssssss',EquipmentList);


    return async (dispatch, getState) => {
        const login = await getApiKey();
  
         console.log('//////',login);
         let data = JSON.parse(login);
         authtoken =  data;
         console.log("******",authtoken);
  
        await fetch(EquipmentList,{
  
              method:'POST',
              headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': authtoken
                // <-- Specifying the Content-Type
      
              }),
      
              body: JSON.stringify(
                {
      
                  start: '0',
                  length: '10'
      
                })
           
  
          }).then(response => response.json())
          
          .then((responseJson) => {
           
              console.log( responseJson.data,'equipment?????????????????')
  
          return dispatch({
            type: GET_EQUIPMENT,
            payload: responseJson.data.equipments
  
          
          });
   
        });

      };



  }

