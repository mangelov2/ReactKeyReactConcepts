function Concept(props) {
  const title = props.tile;
  const image = props.image;
  const description = props.description;

  return (
    <div className="concept">
      <img src={image} alt="Medal badge with a star" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Concept;
