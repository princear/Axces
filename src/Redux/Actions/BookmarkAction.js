import { GET_BOOKMARK } from "./type";
import AsyncStorage from '@react-native-community/async-storage';

import { ApiScreen } from "../../Api/ApiScreen";

const Allbookmark = ApiScreen.base_url + ApiScreen.Allbookmark;

const getApiKey = async () => {
    return await  await AsyncStorage.getItem('login');
  };

  export const getallbookmark = () => {

    console.log('bookmarkssssssssssssss',Allbookmark);


    return async (dispatch, getState) => {
        const login = await getApiKey();
  
         console.log('//////',login);
         let data = JSON.parse(login);
         authtoken =  data;
         console.log("******",authtoken);
  
        await fetch(Allbookmark,{
  
              method:'POST',
              headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': authtoken
                // <-- Specifying the Content-Type
      
              }),
      
              body: JSON.stringify(
             
                {
                  title:"",
                  start: '0',
                  length: '10'
      
                })
           
  
          }).then(response => response.json())
          .then((responseJson) => {
           
              console.log(responseJson.data.bookmarks,'booooooooooooooooooook?????????????????')
  
          return dispatch({

            type: GET_BOOKMARK,
            payload: responseJson.data.bookmarks

    });

        });
      };



  }

