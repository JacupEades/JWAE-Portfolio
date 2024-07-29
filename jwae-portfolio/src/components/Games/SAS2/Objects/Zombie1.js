/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/default
import Phaser from "phaser";

class Zombie1 {
  constructor(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.physics.add
      .image(x, y, "zombie1")
      .setOrigin(0.5, 0.5)
      .setDisplaySize(50, 50)
      .setCollideWorldBounds(true);
  }

  update(player) {
    const maxPlayerVelocity = 500;
    const chaseVelocity = maxPlayerVelocity / 2;

    this.scene.physics.moveToObject(this.sprite, player, chaseVelocity);
  }
}

export default Zombie1;
