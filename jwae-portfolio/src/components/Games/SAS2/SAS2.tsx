import React, { useEffect, useRef } from "react";
import { AUTO, Scene } from "phaser";

import "./SAS2.scss";

interface SAS2Props {}

const SAS2: React.FC<SAS2Props> = () => {
  const phaserGameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    class Example extends Scene {
      preload() {
        this.load.setBaseURL("https://labs.phaser.io");

        this.load.image("sky", "assets/skies/space3.png");
        this.load.image("logo", "assets/sprites/phaser3-logo.png");
        this.load.image("red", "assets/particles/red.png");
      }

      create() {
        this.add.image(400, 300, "sky");

        const particles = this.add.particles(0, 0, "red", {
          speed: 100,
          scale: { start: 1, end: 0 },
          blendMode: "ADD",
        });

        const logo = this.physics.add.image(400, 100, "logo");

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);
      }
    }

    const config: Phaser.Types.Core.GameConfig = {
      type: AUTO,
      width: 800,
      height: 600,
      scene: Example,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 200 },
        },
      },
      parent: phaserGameRef.current!,
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <section className="Games">
      <div ref={phaserGameRef} />
    </section>
  );
};

export default SAS2;
