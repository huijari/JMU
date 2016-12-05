import h from 'inferno-hyperscript';
import { combine } from 'most';

import Input from '../pure/input';
import Radon from '../radon';

const domain = Radon();
const username = Radon();
const token = Radon();

const data = combine(
  (a,b,c) => `${a} ${b} ${c}`,
  domain.stream().filter(x => x),
  username.stream().filter(x => x),
  token.stream().filter(x => x)
);
data.observe(console.log.bind(console));

const Settings = _ => h('article.Settings', [
  Input('Domain', 'url', e => domain(e.target.value)),
  Input('Username', 'text', e => username(e.target.value)),
  Input('Token', 'password', e => token(e.target.value))
]);

export default Settings;
