import Radon from './radon';
import Settings from './impure/settings';
import Switch from './switch';

const Hash = Radon();
window
  .addEventListener('hashchange', _ => Hash(location.hash.substr(1)));

const Routes = Switch(Settings)
  .on('allJobs', 0)
  .on('favorites', 1)
  .on('settings', Settings);

const Router = Hash.stream().map(Routes);

export default Router;
