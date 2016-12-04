import h from 'inferno-hyperscript';

import Navbar from './navbar';
import Section from './section';
import Topbar from './topbar';

const Shell = content => h('main.Shell', [
  Topbar(),
  Section(content),
  Navbar('settings')
]);

export default Shell;
