import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import '../src/tachyons/tachyons.scss';
import Demo from './Demo';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('demo')
  );
};

render(Demo);

if ((module as any).hot) {
  (module as any).hot.accept('./Demo', () => {
    render(Demo);
  });
}
