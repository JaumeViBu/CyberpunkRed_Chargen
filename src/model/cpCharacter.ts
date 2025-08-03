export default class CpCharacter {
  handle: string;
  stats: {
    body: number;
    move: number;
    ref: number;
    dex: number;
    tech: number;
    cool: number;
    emp: number;
    int: number;
    will: number;
    luck: number;
  };
  constructor(handle: string) {
    this.handle = handle;
    this.stats = {
      body: 2,
      move: 2,
      ref: 2,
      dex: 2,
      tech: 2,
      cool: 2,
      emp: 2,
      int: 2,
      will: 2,
      luck: 2,
    };
  }
}
