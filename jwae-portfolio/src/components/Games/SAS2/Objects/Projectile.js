// eslint-disable-next-line import/default
import Phaser from "phaser";

class Projectile extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, velocity) {
    super(scene, x, y, 10, 10, 0x000000);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setVelocity(velocity.x, velocity.y);
    this.setFillStyle(0x000000, 1);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (
      this.x < 0 ||
      this.x > this.scene.physics.world.bounds.width ||
      this.y < 0 ||
      this.y > this.scene.physics.world.bounds.height
    ) {
      this.destroy();
    }
  }
}

export default Projectile;
