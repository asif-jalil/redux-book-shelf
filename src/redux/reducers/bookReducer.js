
const initialState = {
   discoverList: [],
   readingList: [],
   finishedList:[]
}

const bookReducer = (state = initialState, action) => {
   
   switch (action.type) {
      case "LOAD_BOOKS": {
         const newList = {
            ...state,
            discoverList: action.payload
         }
         return newList;
      }
      case "READING_LIST": {
         const newList = {
            ...state,
            readingList: action.payload
         }
         return newList;
      }
      case "ADD_TO_READING_LIST": {
         if (state.readingList.indexOf(action.payload) === -1) {
            const newList = {
               ...state,
               readingList: [...state.readingList, action.payload]
            }
            return newList;
         }
         return state;
      }
      case "REMOVE_FROM_READING_LIST": {
         const newList = {
            ...state,
            readingList: state.readingList.filter(book=> book.id !== action.payload.id)
         }
         return newList;
      }
      case "LOAD_FINISHED_BOOK": {
         const newList = {
            ...state,
            finishedList: action.payload
         }
         return newList;
      }
      case "ADD_TO_FINISHED_LIST": {
         const newList = {
            ...state,
            readingList: state.readingList.filter(book=> book.id !== action.payload.id),
            finishedList: [ ...state.finishedList, action.payload ]
         }
         return newList;
      }
      default: {
         return state;
      }
         
   }

}

export default bookReducer;