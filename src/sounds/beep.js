import UIfx from 'uifx';
import beepMp3 from 'Mp3/button-20.mp3';

// volume number between 0.0 ~ 1.0

const beep = new UIfx(
  beepMp3, { volume: 0.4,  throttleMs: 100 }
);

export { beep };
