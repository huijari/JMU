import h from 'inferno-hyperscript';
import { of } from 'most';

import Radon from '../radon';

const Input = (label, type) => {
  const value = Radon();
  const vtree$ = of(h('label.Input', [
    label,
    h('input', {
      type,
      oninput: e => value(e.target.value)
    })
  ]));
  const sinks = {
    vtree$,
    value$: value.stream().startWith('')
  };
  return sinks;
};

export default Input;
