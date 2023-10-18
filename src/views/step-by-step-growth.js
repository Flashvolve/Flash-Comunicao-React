import React from 'react'

import { Helmet } from 'react-helmet'

import PopUpintro from '../components/pop-upintro'
import PopUp01 from '../components/pop-up01'
import PopUp02 from '../components/pop-up02'
import PopUp03 from '../components/pop-up03'
import PopUp04 from '../components/pop-up04'
import PopUp05 from '../components/pop-up05'
import PopUp06 from '../components/pop-up06'
import './step-by-step-growth.css'

const StepByStepGrowth = (props) => {
  return (
    <div className="step-by-step-growth-container">
      <Helmet>
        <title>Step-by-Step-Growth - Flash - Comunicação</title>
        <meta
          property="og:title"
          content="Step-by-Step-Growth - Flash - Comunicação"
        />
      </Helmet>
      <PopUpintro rootClassName="pop-upintro-root-class-name"></PopUpintro>
      <PopUp01 rootClassName="pop-up01-root-class-name"></PopUp01>
      <PopUp02 rootClassName="pop-up02-root-class-name"></PopUp02>
      <PopUp03 rootClassName="pop-up03-root-class-name"></PopUp03>
      <PopUp04 rootClassName="pop-up04-root-class-name"></PopUp04>
      <PopUp05 rootClassName="pop-up05-root-class-name"></PopUp05>
      <PopUp06 rootClassName="pop-up06-root-class-name"></PopUp06>
    </div>
  )
}

export default StepByStepGrowth
