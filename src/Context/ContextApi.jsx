import { createContext, useContext,useReducer,useEffect } from 'react';
import React from 'react';
import reducer from './Reducer';

const Api='http://hn.algolia.com/api/v1/search?'


const initialState = {
  isLoading:true,
  query:'',
  nbPages:0,
  page:0,
  hits:[],
}
const AppContext = createContext();

const AppProvider = ({ children }) => {

const [state,dispatch] = useReducer(reducer,initialState);

const fetchData = async (url)=>{
  dispatch({
    type:'LOADING',
  })
 try {
  const response = await fetch(url);
  const data = await response.json();
  dispatch({
    type:'POST',
    payload:{
      hits:data.hits,
      nbPages:data.nbPages,
    }
  })
  
 } catch (error) {
  console.log(error);
  
 }
}

const searchPost=(searchQuery)=>{
  dispatch({
    type:'SEARCH_QUERY',
    payload:searchQuery
  })
}

const getNextPage=()=>{
  dispatch({
    type:'NEXT',
  })
}
const getPrevPage=()=>{
  dispatch({
    type:'PREV',
  })
}



useEffect(()=>{
  fetchData(`${Api}query=${state.query}&page=${state.page}`);
},[state.query,state.page])

  return (
    <AppContext.Provider value={{...state,searchPost,getNextPage,getPrevPage}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = ()=>{
  return useContext(AppContext);
};

export {AppProvider, AppContext,useGlobalContext };