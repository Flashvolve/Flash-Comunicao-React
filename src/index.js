import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Landing from './views/landing'
import GrowthIntegraes from './views/growth-integraes'
import ComunicaoCampanhas from './views/comunicao-campanhas'
import GrowthContatos from './views/growth-contatos'
import ComunicaoDashboard from './views/comunicao-dashboard'
import StepByStepGrowth from './views/step-by-step-growth'
import LandingGrowth from './views/landing-growth'
import GrowthSettings from './views/growth-settings'
import GrowthChamadoStatus from './views/growth-chamado-status'
import FlashGrowthReset from './views/flash-growth-reset'
import GrowthHelpdesk from './views/growth-helpdesk'
import ComunicaoColaboradores from './views/comunicao-colaboradores'
import TemplatesFlashvolve from './views/templates-flashvolve'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Landing} exact path="/landing" />
        <Route component={GrowthIntegraes} exact path="/growth-integraes" />
        <Route
          component={ComunicaoCampanhas}
          exact
          path="/comunicao-campanhas"
        />
        <Route component={GrowthContatos} exact path="/growth-contatos" />
        <Route component={ComunicaoDashboard} exact path="/" />
        <Route component={StepByStepGrowth} exact path="/step-by-step-growth" />
        <Route component={LandingGrowth} exact path="/landing-growth" />
        <Route component={GrowthSettings} exact path="/growth-settings" />
        <Route
          component={GrowthChamadoStatus}
          exact
          path="/growth-chamado-status"
        />
        <Route component={FlashGrowthReset} exact path="/flash-growth-reset" />
        <Route component={GrowthHelpdesk} exact path="/growth-helpdesk" />
        <Route
          component={ComunicaoColaboradores}
          exact
          path="/comunicao-colaboradores"
        />
        <Route
          component={TemplatesFlashvolve}
          exact
          path="/templates-flashvolve"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
