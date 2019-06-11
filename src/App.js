import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': '1',
  'name': 'sangho yi',
  'image': 'https://placeimg.com/256/256/any',
  'birthday': 'july-14-1973',
  'gender': 'male',
  'job': 'computer programmer'
},{
  'id': '2',
  'name': 'sangho yi',
  'image': 'https://placeimg.com/256/256/any',
  'birthday': 'july-14-1974',
  'gender': 'male',
  'job': 'computer programmer'
},{
  'id': '3',
  'name': 'sangho yi',
  'image': 'https://placeimg.com/256/256/any',
  'birthday': 'july-14-1975',
  'gender': 'male',
  'job': 'computer programmer'
}
]
function App() {
  return (
    <div>
      {
        customers.map( c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })

      }}
    </div>
  );
}



export default App;
