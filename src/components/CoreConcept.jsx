export default function CoreConcept({ image, header, description }) {
  return (
    <li>
      <img src={image} alt="Image" />
      <h3>{header}</h3>
      <p>{description}</p>
    </li>
  );
}
