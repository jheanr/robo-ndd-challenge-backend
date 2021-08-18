import { Arm } from './Arm';

class Arms {
  left: Arm;
  right: Arm;

  constructor() {
    this.left = new Arm();
    this.right = new Arm();
  }
}

export { Arms };
