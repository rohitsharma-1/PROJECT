const reducer = (state,action)=>{
 
   switch(action.type){
    case 'LOADING':
    return{
      ...state,
      isLoading:true,
    }
    case 'POST':
      return{
        ...state,
        isLoading:false,
        hits :action.payload.hits,
        nbPages: action.payload.nbPages,
      }
      case 'SEARCH_QUERY':
        return{
          ...state,
          query:action.payload,
        }
        case 'NEXT':
          {state.page>=state.nbPages?state.page=0:''}
          return{
            ...state,
            page:state.page+1,
          }
          case 'PREV':
            {state.page<=0?state.page=1:''}
            return{
              ...state,
              page:state.page-1,
            }
   }
   return state
}
export default reducer