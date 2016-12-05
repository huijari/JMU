const Switch = base => {
  const entries = Object.create(null);
  const sw = value => {
    const entry = entries[value];
    if (entry)
      return entry;
    return base;
  };
  sw.on = (entry, value) => {
    entries[entry] = value;
    return sw;
  };
  return sw;
};

export default Switch;
