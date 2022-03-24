import {useEffect, useRef} from 'react';

type CardPlayerProps = {
  src: string,
  poster: string,
  mouseOver: boolean,
}

function CardPlayer (props: CardPlayerProps) {
  const {mouseOver, src, poster} = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (mouseOver) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [mouseOver]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      poster={poster}
    >
    </video>
  );
}

export default CardPlayer;
