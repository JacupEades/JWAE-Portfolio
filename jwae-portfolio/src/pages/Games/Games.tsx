import React, { Suspense } from "react";
import "./Games.scss";
import { useParams } from "react-router-dom";

import { GamesNav, Typography } from "../../components";
import * as GameFiles from "../../components/Games";

interface GamesProps {}

const Games: React.FC<GamesProps> = () => {
  const { gameKey } = useParams<{ gameKey: string }>();

  const isValidGameKey = (key: string): key is keyof typeof GameFiles => {
    return key in GameFiles;
  };

  const ComponentToRender =
    gameKey && isValidGameKey(gameKey)
      ? (GameFiles[gameKey] as React.ElementType)
      : null;

  const gameFileKeys = Object.keys(GameFiles);

  return (
    <section className="Games">
      <GamesNav gameFiles={gameFileKeys} />
      {/* Content */}

      <div className="Games-component">
        {ComponentToRender ? (
          <Suspense fallback={<div>Loading...</div>}>
            <ComponentToRender />
          </Suspense>
        ) : (
          <Typography kind="body1">
            Select a component from the list.
          </Typography>
        )}
      </div>
    </section>
  );
};

export default Games;
