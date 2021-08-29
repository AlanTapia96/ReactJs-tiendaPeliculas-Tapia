import React from 'react'
import { Notyf } from 'notyf';

export default React.createContext(
  new Notyf({
    duration: 3000,
    position : {
        x: 'right',
        y: 'bottom'
    },
    types: [
      {
        type: 'success',
        background: 'green',
      },
      {
        type: 'warning',
        background: 'orange',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      }
    ]
  })
);