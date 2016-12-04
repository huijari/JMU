import h from 'inferno-hyperscript';

import Label from './label';

const NavbarLink = (name, href, active) => h('a.NavbarLink', {
  href,
  className: active ? 'active' : ''
}, Label(name));

export default NavbarLink;
