class Head {
  inclination?: string;
  rotation?: string;

  constructor() {
    if (!this.inclination) {
      this.inclination = 'Em Repouso';
    }

    if (!this.rotation) {
      this.rotation = 'Em Repouso';
    }
  }
}

export { Head };
