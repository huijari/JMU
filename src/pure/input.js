import h from 'inferno-hyperscript';

const Input = (label, type, oninput) => h('label.Input', [
  label,
  h('input', { type, oninput })
]);

export default Input;
