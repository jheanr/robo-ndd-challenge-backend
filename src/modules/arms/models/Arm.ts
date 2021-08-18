class Arm {
  elbow?: string;
  elbow_position?: number;
  wrist?: string;
  wrist_position?: number;

  constructor() {
    if (!this.elbow) {
      this.elbow = 'Em Repouso';
      this.elbow_position = 1;
    }

    if (!this.wrist) {
      this.wrist = 'Em Repouso';
      this.wrist_position = 3;
    }
  }
}

export { Arm };
