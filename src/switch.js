const Switch = _ => {
  const entries = Object.create(null);
  const sw = value => entries[value];
  sw.on = (entry, value) => {
    entries[entry] = value;
    return sw;
  };
  return sw;
};

export default Switch;
