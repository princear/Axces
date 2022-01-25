
import { GET_WORKOUT } from '../Actions/type'
import { SCHEDULED_WORKOUT } from '../Actions/type'
import { FINISHED_WORKOUT } from '../Actions/type'
import { WORKOUT_DETAIL } from '../Actions/type'
import { GET_WORKOUT_EXERCISES } from '../Actions/type'

const initialstate ={

    allworkouts:[],
    scheduledworkout:[],
    finishedworkout:[],
    workoutdetail:{},
    workoutexercises:[]
    // workoutid:'',
    // workoutname:''
}

const WorkoutReducer = (state = initialstate, action) => {
    
   

    switch(action.type){

        case GET_WORKOUT:
      
        return {...state,allworkouts:action.workout}


        case SCHEDULED_WORKOUT:

         return {... state,scheduledworkout:action.scheduledworkout}

         case FINISHED_WORKOUT:
             return { ...state,finishedworkout:action.finishedworkout}

             case WORKOUT_DETAIL:

           return { 
               ...state,
               workoutdetail:action.workoutdetail,
            //    workoutid:action.workoutid,
            //    workoutname:action.workouttitle
            }  

          case GET_WORKOUT_EXERCISES:
              return {...state,workoutexercises:action.workoutexercises}  




    }
    return state;

}

export default WorkoutReducer;