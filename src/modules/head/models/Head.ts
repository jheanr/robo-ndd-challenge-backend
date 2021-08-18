class Head {
  inclination?: string;
  inclination_position?: number;
  rotation?: string;
  rotation_position?: number;

  constructor() {
    if (!this.inclination) {
      this.inclination = 'Em Repouso';
      this.inclination_position = 2;
    }

    if (!this.rotation) {
      this.rotation = 'Em Repouso';
      this.rotation_position = 3;
    }
  }
}

export { Head };
