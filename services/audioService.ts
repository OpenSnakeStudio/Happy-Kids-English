export const playSFX = (type: 'correct' | 'wrong' | 'click' | 'win') => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    // Check if context is suspended (autoplay policy) and resume if needed
    const ctx = new AudioContext();
    
    const createOsc = (freq: number, type: OscillatorType, startTime: number, duration: number, volume: number = 0.1) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      gain.gain.setValueAtTime(volume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;

    switch (type) {
      case 'correct':
        // Ding-Ding! (High sine wave, pleasant major third)
        createOsc(880, 'sine', now, 0.1, 0.15); // A5
        createOsc(1108.73, 'sine', now + 0.1, 0.4, 0.15); // C#6
        break;
      case 'wrong':
        // Uh oh (Low sawtooth, descending)
        createOsc(150, 'sawtooth', now, 0.15, 0.2);
        createOsc(110, 'sawtooth', now + 0.15, 0.4, 0.2);
        break;
      case 'click':
        // Short pop
        createOsc(600, 'sine', now, 0.05, 0.05);
        break;
      case 'win':
        // Fanfare (Major Arpeggio)
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            createOsc(freq, 'triangle', now + i*0.08, 0.4, 0.15);
        });
        break;
    }
  } catch (e) {
    console.error("Audio play failed", e);
  }
};