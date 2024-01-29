import ProgressBar from "../../resuable/progressBar/ProgressBar";

const UVCard = (props) => {
    const { uvIndex } = props;
    return (
        <div>
            <p>{Math.round(uvIndex)}</p>
            <ProgressBar value={Math.round(uvIndex)} max={12} />
        </div>
    );
};
export default UVCard;
