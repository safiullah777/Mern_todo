import ActivityIndicator from "react-activity-indicator";
import "react-activity-indicator/src/activityindicator.css";
import './style.css'
function Loader() {
  return (
    <div className="loader">
      <ActivityIndicator
        number={5}
        diameter={40}
        borderWidth={1}
        duration={300}
        activeColor="#66D9EF"
        borderColor="black"
        borderWidth={5}
        borderRadius="1rem"
      />
    </div>
  );
}

export default Loader;
