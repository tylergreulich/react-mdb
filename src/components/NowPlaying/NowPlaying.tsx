import React from 'react';
import { nowPlayingEffect } from './NowPlaying.effect';
import { NowPlayingResultsWrapper, NowPlayingText } from './NowPlaying.styles';

const NowPlayingMovie = React.lazy(() =>
  import('./NowPlayingMovie/NowPlayingMovie')
);

export const NowPlaying = () => {
  const { nowPlayingResults } = nowPlayingEffect();

  return (
    <>
      <NowPlayingText>Now Playing</NowPlayingText>
      <NowPlayingResultsWrapper>
        {nowPlayingResults.map(({ id, ...props }) => (
          <NowPlayingMovie key={id} id={id} {...props} />
        ))}
      </NowPlayingResultsWrapper>
    </>
  );
};
