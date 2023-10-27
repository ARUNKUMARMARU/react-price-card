import React from 'react';

function App(props) {
console.log(props)
  const {data} = props;

  return (

    <div>
      {console.log(data)}
      <div id='container'>
      
       </div>
      <div id='container2'>
      <ul>
          {
            data.map((innerdata) => {
             return <li>{ innerdata.plan}</li>
            })
          }
          </ul>    
      </div>
      <div id='container3'>

      </div>
      <div id='container4'>

      </div>
    </div>
  )
}

export default App;