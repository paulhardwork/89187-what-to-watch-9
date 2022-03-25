import {useEffect, useRef} from 'react';

type CardPlayerProps = {
  src: string,
  poster: string,
  isHover: boolean,
}

function CardPlayer (props: CardPlayerProps) {
  const {isHover, src, poster} = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isHover) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isHover]);

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
