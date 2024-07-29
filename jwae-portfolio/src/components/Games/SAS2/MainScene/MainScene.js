/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/default
import Phaser from "phaser";
import Player from "../Objects/Player";
import Zombie1 from "../Objects/Zombie1";
import Projectile from "../Objects/Projectile";
import playerImage from "../../../../assets/game/player/player1.png";
import zombie1Image from "../../../../assets/game/player/zombie-1.png";

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  preload() {
    // Load in images and sprites
    this.load.image("player", playerImage);
    this.load.image("zombie1", zombie1Image);
  }

  create() {
    this.cameras.main.setBackgroundColor("#ffffff");
    this.physics.world.setBounds(0, 0, 1600, 1200);

    this.player = new Player(this, 400, 300);
    this.reticle = this.add.rectangle(400, 400, 25, 25, 0xff0000);

    this.cameras.main.zoom = 0.5;
    // Add borders to the boundary
    this.add.rectangle(0, 0, 1600, 10, 0x000000).setOrigin(0, 0);
    this.add.rectangle(0, 0, 10, 1200, 0x000000).setOrigin(0, 0);
    this.add.rectangle(1590, 0, 10, 1200, 0x000000).setOrigin(0, 0);
    this.add.rectangle(0, 1190, 1600, 10, 0x000000).setOrigin(0, 0);

    this.physics.add.existing(this.reticle);
    this.reticle.body.setCollideWorldBounds(true);

    this.keys = this.input.keyboard.addKeys("W,A,S,D");

    this.projectiles = this.physics.add.group({
      classType: Projectile,
      runChildUpdate: true,
    });

    this.input.on("pointerdown", () => {
      this.input.mouse.requestPointerLock();
    });

    this.input.keyboard.on("keydown_Q", (event) => {
      if (this.input.mouse.locked) {
        this.input.mouse.releasePointerLock();
      }
    });

    this.input.on(
      "pointermove",
      (pointer) => {
        if (this.input.mouse.locked) {
          this.reticle.x += pointer.movementX;
          this.reticle.y += pointer.movementY;
        }
      },
      this
    );

    this.input.on(
      "pointerdown",
      (pointer) => {
        if (pointer.leftButtonDown()) {
          this.fireProjectile();
        }
      },
      this
    );

    this.text = this.add.text(20, 40, "", { color: "#000000" });

    // Timer to spawn new zombie1 every 30 seconds
    this.time.addEvent({
      delay: 30000, // 30 seconds
      callback: this.spawnZombie1,
      callbackScope: this,
      loop: true,
    });

    // Initial spawn of zombie1
    this.zombies = this.add.group();
    this.spawnZombie1();
  }

  update() {
    this.player.update(this.keys);
    this.zombies
      .getChildren()
      .forEach((zombie) => zombie.update(this.player.sprite));

    this.text.setText(
      Object.entries(this.keys).map(
        ([name, key]) =>
          `${name}: keyCode=${key.keyCode} isDown=${key.isDown} isUp=${key.isUp} timeDown=${key.timeDown} timeUp=${key.timeUp}`
      )
    );

    this.cameras.main.startFollow(this.reticle);

    Phaser.Actions.Call(
      this.projectiles.getChildren(),
      (projectile) => {
        if (
          projectile.active &&
          (projectile.x < 0 ||
            projectile.x > 1600 ||
            projectile.y < 0 ||
            projectile.y > 1200)
        ) {
          projectile.setActive(false).setVisible(false).destroy();
        }
      },
      this
    );
  }

  fireProjectile() {
    const velocity = new Phaser.Math.Vector2();
    this.physics.velocityFromRotation(
      this.player.sprite.rotation,
      600,
      velocity
    );

    const projectile = new Projectile(
      this,
      this.player.sprite.x,
      this.player.sprite.y,
      velocity
    );
    this.projectiles.add(projectile);
  }

  spawnZombie1() {
    const x = Phaser.Math.Between(0, 1600);
    const y = Phaser.Math.Between(0, 1200);
    const zombie = new Zombie1(this, x, y);
    this.zombies.add(zombie.sprite);
  }
}

export default MainScene;
