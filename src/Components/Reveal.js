import { Bounce, Slide } from "react-reveal";
import Shake from "react-reveal/Shake";
import RubberBand from "react-reveal/RubberBand";
function My_ReactReveal() {
  return (
    <>
      <Bounce left>
        <h1>Bounce</h1>
      </Bounce>
      <Slide left>
        <h1>Slide</h1>
      </Slide>
      <Shake>
        <h1>Shake</h1>
      </Shake>
      <RubberBand>
        <h1>Rubberband</h1>
      </RubberBand>
    </>
  );
}
export default My_ReactReveal;