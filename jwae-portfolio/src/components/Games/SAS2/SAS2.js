/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useRef } from "react";
// eslint-disable-next-line import/default
import Phaser from "phaser";
import playerImage from "../../../assets/game/player/player1.png";
import badCircleImage from "../../../assets/game/player/zombie-1.png";
import "./SAS2.scss";

const SAS2 = () => {
  const phaserGameRef = useRef(null);

  useEffect(() => {
    let keys = null;
    let player = null;
    let badCircle = null;
    let reticle = null;
    let text = null;
    let projectiles = null;

    class Example extends Phaser.Scene {
      constructor() {
        super({ key: "Example" });
      }

      preload() {
        // Load in images and sprites
        this.load.image("player", playerImage);
        this.load.image("badCircle", badCircleImage);
      }

      create() {
        // Set background color
        this.cameras.main.setBackgroundColor("#ffffff");

        this.physics.world.setBounds(0, 0, 1600, 1200);

        // Create player sprite
        player = this.physics.add.image(400, 300, "player");
        badCircle = this.physics.add.image(400, 500, "badCircle");
        reticle = this.add.rectangle(400, 400, 25, 25, 0xff0000);

        this.cameras.main.zoom = 0.5;
        // Add borders to the boundary
        this.add.rectangle(0, 0, 1600, 10, 0x000000).setOrigin(0, 0);
        this.add.rectangle(0, 0, 10, 1200, 0x000000).setOrigin(0, 0);
        this.add.rectangle(1590, 0, 10, 1200, 0x000000).setOrigin(0, 0);
        this.add.rectangle(0, 1190, 1600, 10, 0x000000).setOrigin(0, 0);

        player
          .setOrigin(0.5, 0.5)
          .setDisplaySize(132, 120)
          .setCollideWorldBounds(true)
          .setDrag(500, 500);

        badCircle
          .setOrigin(0.5, 0.5)
          .setDisplaySize(50, 50)
          .setCollideWorldBounds(true);

        this.physics.add.existing(reticle);
        reticle.body.setCollideWorldBounds(true);

        keys = this.input.keyboard.addKeys("W,A,S,D");

        // Create a group for projectiles
        projectiles = this.physics.add.group({
          classType: Phaser.GameObjects.Rectangle,
          runChildUpdate: true,
        });

        // Locks pointer on mousedown
        game.canvas.addEventListener("mousedown", () => {
          game.input.mouse.requestPointerLock();
        });

        // Exit pointer lock when Q or escape (by default) is pressed.
        this.input.keyboard.on(
          "keydown_Q",
          (event) => {
            if (game.input.mouse.locked) {
              game.input.mouse.releasePointerLock();
            }
          },
          0,
          this
        );

        // Move reticle upon locked pointer move
        this.input.on(
          "pointermove",
          function (pointer) {
            if (this.input.mouse.locked) {
              reticle.x += pointer.movementX;
              reticle.y += pointer.movementY;
            }
          },
          this
        );

        // Fire projectile on left mouse click
        this.input.on(
          "pointerdown",
          function (pointer) {
            if (pointer.leftButtonDown()) {
              this.fireProjectile();
            }
          },
          this
        );

        text = this.add.text(20, 40, "", { color: "#000000" });

        // Timer to spawn new badCircle every 30 seconds
        this.time.addEvent({
          delay: 30000, // 30 seconds
          callback: this.spawnBadCircle,
          callbackScope: this,
          loop: true,
        });
      }

      update() {
        player.setVelocity(0);

        if (keys.A.isDown) {
          player.setVelocityX(-300);
        } else if (keys.D.isDown) {
          player.setVelocityX(300);
        }

        if (keys.W.isDown) {
          player.setVelocityY(-300);
        } else if (keys.S.isDown) {
          player.setVelocityY(300);
        }

        this.constrainVelocity(player, 500);
        this.constrainReticle(reticle, 550);

        player.rotation = Phaser.Math.Angle.Between(
          player.x,
          player.y,
          reticle.x,
          reticle.y
        );

        this.cameras.main.startFollow(reticle);

        reticle.body.velocity.x = player.body.velocity.x;
        reticle.body.velocity.y = player.body.velocity.y;

        this.moveBadCircle();

        text.setText(
          Object.entries(keys).map(
            ([name, key]) =>
              `${name}: keyCode=${key.keyCode} isDown=${key.isDown} isUp=${key.isUp} timeDown=${key.timeDown} timeUp=${key.timeUp}`
          )
        );

        // Update projectiles
        Phaser.Actions.Call(
          projectiles.getChildren(),
          function (projectile) {
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

      moveBadCircle() {
        const maxPlayerVelocity = 500;
        const chaseVelocity = maxPlayerVelocity / 2;

        this.physics.moveToObject(badCircle, player, chaseVelocity);
      }

      spawnBadCircle() {
        const x = Phaser.Math.Between(0, 1600);
        const y = Phaser.Math.Between(0, 1200);
        badCircle = this.physics.add.image(x, y, "badCircle");
        badCircle
          .setOrigin(0.5, 0.5)
          .setDisplaySize(50, 50)
          .setCollideWorldBounds(true);
      }

      fireProjectile() {
        const velocity = new Phaser.Math.Vector2();
        this.physics.velocityFromRotation(player.rotation, 600, velocity);

        const projectile = projectiles
          .create(player.x, player.y, "projectile")
          .setFillStyle(0x000000, 1)
          .setSize(10, 10)
          .setOrigin(0.5, 0.5);

        this.physics.add.existing(projectile);
        projectile.body.setVelocity(velocity.x, velocity.y);
      }

      constrainVelocity(sprite, maxVelocity) {
        if (!sprite || !sprite.body) return;

        let angle, currVelocitySqr, vx, vy;
        vx = sprite.body.velocity.x;
        vy = sprite.body.velocity.y;
        currVelocitySqr = vx * vx + vy * vy;

        if (currVelocitySqr > maxVelocity * maxVelocity) {
          angle = Math.atan2(vy, vx);
          vx = Math.cos(angle) * maxVelocity;
          vy = Math.sin(angle) * maxVelocity;
          sprite.body.velocity.x = vx;
          sprite.body.velocity.y = vy;
        }
      }

      constrainReticle(reticle, radius) {
        const distX = reticle.x - player.x;
        const distY = reticle.y - player.y;

        if (distX > 800) reticle.x = player.x + 800;
        else if (distX < -800) reticle.x = player.x - 800;

        if (distY > 600) reticle.y = player.y + 600;
        else if (distY < -600) reticle.y = player.y - 600;

        const distBetween = Phaser.Math.Distance.Between(
          player.x,
          player.y,
          reticle.x,
          reticle.y
        );
        if (distBetween > radius) {
          const scale = distBetween / radius;
          reticle.x = player.x + (reticle.x - player.x) / scale;
          reticle.y = player.y + (reticle.y - player.y) / scale;
        }
      }
    }

    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: phaserGameRef.current,
      physics: {
        default: "arcade",
        arcade: {
          debug: false, // Disable debug mode to remove boxes
          // debugBodyColor: "#0000FF",
          // debugVelocityColor: "#00FF00",
        },
      },
      scene: Example,
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <section className="SAS2">
      <div ref={phaserGameRef} />
    </section>
  );
};

export default SAS2;

// /* eslint-disable import/no-named-as-default-member */
// import React, { useEffect, useRef } from "react";
// // eslint-disable-next-line import/default
// import Phaser from "phaser";
// import MainScene from "./MainScene/MainScene";
// import "./SAS2.scss";

// const SAS2 = () => {
//   const phaserGameRef = useRef(null);

//   useEffect(() => {
//     const config = {
//       type: Phaser.AUTO,
//       width: 800,
//       height: 600,
//       parent: phaserGameRef.current,
//       physics: {
//         default: "arcade",
//         arcade: {
//           debug: false, // Disable debug mode to remove boxes
//         },
//       },
//       scene: MainScene,
//     };

//     const game = new Phaser.Game(config);

//     return () => {
//       game.destroy(true);
//     };
//   }, []);

//   return (
//     <section className="SAS2">
//       <div ref={phaserGameRef} />
//     </section>
//   );
// };

// export default SAS2;
