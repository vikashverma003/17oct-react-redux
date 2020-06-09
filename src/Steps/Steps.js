import React from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'
import { StepTable } from './StepTable'

import StepConfirmation  from './StepConfirmation'



const Steps = 
    [
      {name: '1', component: <StepOne/>},
      {name: '2', component: <StepTwo/>},
      {name:'3', component: <StepTable/>},
      {name:'4', component: <StepConfirmation />},
      {name: '5', component: <StepFour/>}
    ]

export { Steps }