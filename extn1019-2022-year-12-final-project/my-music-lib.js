// a helpful object for mapping between drum names and which "note" they're mapped to
var drumMap = {
  kick: "C2",
  sideStick: "C#2",
  snare: "D2",
  handClap: "D#2",
  snare2: "E2",
  lowFloorTom: "F2",
  closedHiHat: "F#2",
  hiFloorTom: "G2",
  pedalHiHat: "G#2",
  lowTom: "A2",
  openHiHat: "A#2",
  lowMidTom: "B2",
  hiMidTom: "C3",
  crash: "C#3",
  hiTom: "D3",
  ride: "D#3",
  chinese: "E3",
  rideBell: "F3",
  tambourine: "F#3",
  splash: "G3",
  cowbell: "G#3",
  crash2: "A3",
  vibraslap: "A#3",
  ride2: "B3",
  hiBongo: "C4",
  lowBongo: "C#4",
  muteHiConga: "D4",
  hiConga: "D#4",
  lowConga: "E4",
  hiTimbale: "F4",
  lowTimbale: "F#4",
  hiAgogo: "G4",
  lowAgogo: "G#4",
  cabasa: "A4",
  maracas: "A#4",
  shortWhistle: "B",
  longWhistle: "C5",
  shortGuiro: "C#5",
  longGuiro: "D5",
  claves: "D#5",
  hiWoodBlock: "E5",
  lowWoodBlock: "F5",
  muteCuica: "F#5",
  openCuica: "G5",
  muteTriangle: "G#5",
  openTriangle: "A5",
  muteSurdo: "A#5",
  openSurdo: "B5"
};

// note: this function assumes that the relevant sound files are in an
// assets/808/ subfolder in your project folder (which they are in the lab
// template)
function create808Sampler() {
  return new Tone.Sampler({
    urls: {
      "C2": "36.mp3",
      "C#2": "37.mp3",
      "D2": "38.mp3",
      "D#2": "39.mp3",
      "E2": "40.mp3",
      "F2": "41.mp3",
      "F#2": "42.mp3",
      "G2": "43.mp3",
      "G#2": "44.mp3",
      "A2": "45.mp3",
      "A#2": "46.mp3",
      "B2": "47.mp3",
      "C3": "48.mp3",
      "C#3": "49.mp3",
      "D3": "50.mp3",
      "D#3": "51.mp3",
      "E3": "52.mp3",
      "F3": "53.mp3",
      "F#3": "54.mp3",
      "G3": "55.mp3",
      "G#3": "56.mp3",
      "A3": "57.mp3",
      "A#3": "58.mp3",
      "B3": "59.mp3",
      "C4": "60.mp3",
      "C#4": "61.mp3",
      "D4": "62.mp3",
      "D#4": "63.mp3",
      "E4": "64.mp3",
      "F4": "65.mp3",
      "F#4": "66.mp3"
    },
    release: 1,
    baseUrl: "/assets/808/",
  });
}

// this is a helper function for creating Tone.Sequences (and starting them,
// assuming the Transport is running)
function createSequence(instrument, pitchArray, sequenceLength, startTime) {
  return new Tone.Sequence(
    (time, note) => { instrument.triggerAttackRelease(note, 0.1, time) },
    pitchArray,
    sequenceLength).start(startTime);
}

function createPart(instrument, pitchArray, sequenceLength, startTime) {
  return new Tone.Part(
    (time, note) => { instrument.triggerAttackRelease(note, 0.1, time) },
    pitchArray,
    sequenceLength).start(startTime);
}
