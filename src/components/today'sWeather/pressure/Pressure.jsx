const AirQualityCard = (props) => {
    const { pressure } = props;
    return (
        <>
            <div>
                <p>
                    {pressure}
                    <span>hPa</span>
                </p>
            </div>
        </>
    );
};
export default AirQualityCard;
