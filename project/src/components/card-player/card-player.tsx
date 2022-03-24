type CardPlayerProps = {
  src: string,
  poster: string,
}

function CardPlayer (props: CardPlayerProps) {
  const {src, poster} = props;

  return (
    <video src={src} muted poster={poster}></video>
  );
}

export default CardPlayer;
