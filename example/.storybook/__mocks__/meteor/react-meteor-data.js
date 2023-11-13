import React from 'react';


const reactMeteorData = {
  useTracker: (fn) => {
    fn()
  },
}

export const withTracker = (paramConstructor)=>{
  return function(ElementCreator){
    return function(params){
      params = paramConstructor(params)
      return <>
        <ElementCreator {...params}/>
      </> 
    }
  }
}

export const useTracker = (fn) => {
  fn()
};

export default reactMeteorData
