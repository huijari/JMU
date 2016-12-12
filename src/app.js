import Inferno from 'inferno';
import h from 'inferno-hyperscript';

import Radon from './radon';
import Router from './router';
import Settings from './impure/settings';
import Shell from './pure/shell';

const render = vdom => Inferno.render(vdom, document.querySelector('div'));
const settings = Settings();
Shell(settings)
  .vtree$
  .observe(render);
