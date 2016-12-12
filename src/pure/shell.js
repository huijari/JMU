import h from 'inferno-hyperscript';

import Navbar from './navbar';
import Section from './section';
import Topbar from './topbar';

const Shell = content => ({
  vtree$: content.vtree$.map(vtree =>
    h('main.Shell', [
      Topbar(),
      Section(vtree),
      Navbar('settings')
    ])
  )
});

export default Shell;
