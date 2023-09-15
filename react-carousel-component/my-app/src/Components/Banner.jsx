export default function Banner({ image }) {
  return (
    <div className="image-wrapper">
      <img className="current-image" src={image} />
    </div>
  );
}
