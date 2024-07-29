class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.physics.add
      .image(x, y, "player")
      .setOrigin(0.5, 0.5)
      .setDisplaySize(132, 120)
      .setCollideWorldBounds(true)
      .setDrag(500, 500);
  }

  update(keys) {
    this.sprite.setVelocity(0);

    if (keys.A.isDown) {
      this.sprite.setVelocityX(-300);
    } else if (keys.D.isDown) {
      this.sprite.setVelocityX(300);
    }

    if (keys.W.isDown) {
      this.sprite.setVelocityY(-300);
    } else if (keys.S.isDown) {
      this.sprite.setVelocityY(300);
    }

    this.constrainVelocity(500);
  }

  constrainVelocity(maxVelocity) {
    const body = this.sprite.body;
    if (!body) return;

    const currVelocitySqr =
      body.velocity.x * body.velocity.x + body.velocity.y * body.velocity.y;
    if (currVelocitySqr > maxVelocity * maxVelocity) {
      const angle = Math.atan2(body.velocity.y, body.velocity.x);
      body.velocity.x = Math.cos(angle) * maxVelocity;
      body.velocity.y = Math.sin(angle) * maxVelocity;
    }
  }
}

export default Player;
