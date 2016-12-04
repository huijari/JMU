import h from 'inferno-hyperscript';

import NavbarLink from './navbarLink';

const Navbar = active => h('nav.Navbar', [
  NavbarLink('All Jobs', '#allJobs', active === 'allJobs'),
  NavbarLink('Favorites', '#favorites', active === 'favorites'),
  NavbarLink('Settings', '#settings', active === 'settings')
]);

export default Navbar;
