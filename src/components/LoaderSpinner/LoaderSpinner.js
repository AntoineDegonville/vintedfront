import Loader from "react-loader-spinner";
import "../LoaderSpinner/LoaderSpinner.css";

const LoaderSpinner = () => {
  return (
    <Loader
      type="Circles"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default LoaderSpinner;
