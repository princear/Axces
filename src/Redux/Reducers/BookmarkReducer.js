
import { GET_BOOKMARK } from "../Actions/type";

const initialstate ={

    allbookmarks:[]
}

const BookmarkReducer = (state = initialstate, action) => {

    switch(action.type){

        case GET_BOOKMARK:
      
        return {...state,allbookmarks:action.payload}

    }
    return state;

}

export default BookmarkReducer;