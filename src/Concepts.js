import Concept from "./Concept";
import Card from "./Card";

function Concepts(props) {
  return (
    <Card>
      <Concept
        title={props.items[0].title}
        image={props.items[0].image}
        description={props.items[0].description}
      ></Concept>
      <Concept
        title={props.items[1].title}
        image={props.items[1].image}
        description={props.items[1].description}
      ></Concept>
      <Concept
        title={props.items[2].title}
        image={props.items[2].image}
        description={props.items[2].description}
      ></Concept>
    </Card>
  );
}
export default Concepts;
