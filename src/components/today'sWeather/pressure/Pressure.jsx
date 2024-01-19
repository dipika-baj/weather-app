const AirQualityCard = (props) => {
    const { pressure } = props;
    return (
        <>
            <p>
                {pressure}
                <span>hPa</span>
            </p>
        </>
    );
};
export default AirQualityCard;
