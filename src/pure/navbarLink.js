import h from 'inferno-hyperscript';

import Span from './span';

const NavbarLink = (name, href, active) => h('a.NavbarLink', {
  href,
  className: active ? 'active' : ''
}, Span(name));

export default NavbarLink;
