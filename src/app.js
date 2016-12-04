import Inferno from 'inferno';
import h from 'inferno-hyperscript';

import Radon from './radon';
import Shell from './pure/shell';

const lorem = 'Sit in suscipit rerum sunt optio, voluptatem minus sapiente. Autem doloribus tempora repudiandae earum quia sapiente commodi Quod dicta fuga mollitia vero blanditiis. Fuga sit vel consequuntur quae nobis? Iure?';

const render = vdom => Inferno.render(vdom, document.querySelector('main'));
render(Shell(lorem));
