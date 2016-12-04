import { fromEvent } from 'most';

const Radon = _ => {
  const radon = data => emit(data);

  let emit = data => radon;
  radon.addListener = (_, callback) => {
    const oldEmit = emit;
    emit = data => {
      oldEmit(data);
      callback(data);
    };
  };
  radon.removeListener = _ => null;

  let stream = fromEvent(null, radon);
  radon.stream = _ => stream;

  return radon;
};

export default Radon;
