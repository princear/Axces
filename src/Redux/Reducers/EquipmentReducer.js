
import { GET_EQUIPMENT } from "../Actions/EquipmentAction";

const initialstate ={

    equipments:[]
}

const EquipmentReducer = (state = initialstate, action) => {
   // console.log('SSSSSSSSSSSSSSSSSSSSSSSS',action.payload,action.type)

    switch(action.type){

        case GET_EQUIPMENT:
      
        return {...state,equipments:action.payload}

    }
    return state;

}

export default EquipmentReducer;