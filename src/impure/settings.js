import h from 'inferno-hyperscript';
import { combine } from 'most';

import Input from '../impure/input';
import Radon from '../radon';

const Settings = _ => {
  const domain = Input('Domain', 'url');
  const username = Input('Username', 'text');
  const token = Input('Token', 'password');

  const vtree$ = combine(Array,
    domain.vtree$,
    username.vtree$,
    token.vtree$
  ).map(inputs => h('article.Settings', inputs));

  return {
    vtree$,
    domain$: domain.value$,
    username$: username.value$,
    token$: token.value$
  };
};

export default Settings;
