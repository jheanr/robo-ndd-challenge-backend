class Arm {
  elbow?: string;
  wrist?: string;

  constructor() {
    if (!this.elbow) {
      this.elbow = 'Em Repouso';
    }

    if (!this.wrist) {
      this.wrist = 'Em Repouso';
    }
  }
}

export { Arm };
