/**
 * Global constants.
 *
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Null comment for documentation generation.
 */
null;  // tslint:disable-line:no-unused-expression

export const DEFAULT_QUARTERS_PER_MINUTE = 120.0;
// 4/4 music sampled at 4 steps per quarter note.
export const DEFAULT_STEPS_PER_BAR = 16;
export const DEFAULT_STEPS_PER_QUARTER = 4;

// Default absolute quantization.
export const DEFAULT_STEPS_PER_SECOND = 100;

export const DEFAULT_VELOCITY = 80;
export const DEFAULT_PROGRAM = 0;
export const DEFAULT_TICKS_PER_QUARTER = 220;
export const DEFAULT_CHANNEL = 0;
export const DRUM_CHANNEL = 9;
export const NON_DRUM_CHANNELS : ReadonlyArray<number> =
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 15];

// Modded by Riley Stange for Toontrack Midi Inference
export const DEFAULT_DRUM_PITCH_CLASSES: number[][] = [

    [12], // Hi-hat: Open Tip 0
    [13], // Hi-hat: Open Tip 1
    [17], // Hi-hat: Open Tip 5
    [21, 44], // Hi-hat: Closed Pedal
    [22], // Hi-hat: Closed Edge
    [23], // Hi-hat: Open Pedal
    [24], // Hi-hat: Open Edge 1
    [25, 46], // Hi-hat: Open Edge 2
    [26], // Hi-hat: Open Edge 3
    [27, 89], // Cymbal 2: Bow Tip
    [28, 90], // Cymbal 2: Bell Shank
    [29, 116], // Ride: Bow Shank
    [30, 117], // Ride: Bell Tip
    [31, 101], // Cymbal 4: Bow Tip
    [32, 102], // Cymbal 4: Bell Shank
    [34, 36], // Kick: Open
    [35], // Kick: Hit
    [37], // Snare: Sidestick
    [38], // Snare: Center
    [39], // Snare: Closed Roll
    [40], // Snare: Rimshot 
    [41], // Floortom 2: Center
    [43], // Floortom 1: Center 
    [45], // Racktom 3: Center 
    [47], // Racktom 2: Center 
    [48], // Racktom 1: Center 
    [49, 91], // Cymbal 2: Crash
    [50, 94], // Cymbal 2: Mute Hit 
    [51, 113], // Ride: Bow Tip
    [52, 110], // Cymbal 5: Crash
    [53, 114], // Ride: Bell Shank
    [54, 107], // Cymbal 5: Mute Hit 
    [55, 98], // Cymbal 3: Crash
    [57, 103], // Cymbal 4: Crash
    [59, 115], // Ride: Edge
    [60], // Hi-hat: Open Edge 4
    [61, 11, 42], // Hi-hat: Closed Tip
    [62], // Hi-hat: Tight Edge
    [63], // Hi-hat: Tight Tip
    [67], // Snare: Forward Swirl
    [68], // Snare: Muted
    [69], // Snare: Flam 
    [70], // Snare: Muted Accent 
    [73], // Floortom 2: Rimshot 
    [75], // Floortom 1: Rimshot
    [78], // Racktom 3: Rimshot 
    [80], // Racktom 2: Rimshot 
    [82], // Racktom 1: Rimshot 
    [84], // Cymbal 1: Bow Tip 
    [85], // Cymbal 1: Bell Shank 
    [86], // Cymbal 1: Crash 
    [88], // Cymbal 1: Bell Tip 
    [126], // Snare: Backward Brush 
    [127] // Snare: Forward Brush
];

// Velocity-related constants.
export const MIN_MIDI_VELOCITY = 0;
export const MAX_MIDI_VELOCITY = 127;
export const MIDI_VELOCITIES = MAX_MIDI_VELOCITY - MIN_MIDI_VELOCITY + 1;

// Pitch-related constants.
export const NO_CHORD = 'N.C.';
export const NUM_PITCH_CLASSES = 12;
export const MIN_MIDI_PITCH = 0;
export const MAX_MIDI_PITCH = 127;
export const MIDI_PITCHES = MAX_MIDI_PITCH - MIN_MIDI_PITCH + 1;
export const MIN_PIANO_PITCH = 21;
export const MAX_PIANO_PITCH = 108;
export const MIN_DRUM_PITCH = 35;
export const MAX_DRUM_PITCH = 81;

// Program-related constants.
export const MIN_MIDI_PROGRAM = 0;
export const MAX_MIDI_PROGRAM = 127;

// Click-track constants.
export const LO_CLICK_PITCH = 89;
export const HI_CLICK_PITCH = 90;
export const LO_CLICK_CLASS = 9;
export const HI_CLICK_CLASS = 10;
