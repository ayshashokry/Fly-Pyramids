import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import ReachUs from '../pages/ReachUs';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route exact path="/" component={Home} />{' '}
        <Route exact path="/Services" component={Services} />
        <Route exact path="/AboutUs" component={AboutUs} />{' '}
        <Route exact path="/ReachUs" component={ReachUs} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default AnimatedSwitch;
