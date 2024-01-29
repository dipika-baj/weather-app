import ProgressBar from "../../resuable/progressBar/ProgressBar";
const HumidityCard = (props) => {
    const { humidity } = props;
    return (
        <>
            <div>
                <p>
                    {humidity}
                    <span>
                        <sup>%</sup>
                    </span>
                </p>
                <ProgressBar value={humidity} />
            </div>
        </>
    );
};
export default HumidityCard;
