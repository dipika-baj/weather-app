const WindStatusCard = (props) => {
    const { windStatus } = props;
    return (
        <>
            <p>
                {windStatus}
                <span>km/h</span>
            </p>
        </>
    );
};
export default WindStatusCard;
