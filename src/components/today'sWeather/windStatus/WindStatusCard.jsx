const WindStatusCard = (props) => {
    const { windStatus } = props;
    return (
        <>
            <div>
                <p>
                    {windStatus}
                    <span>km/h</span>
                </p>
            </div>
        </>
    );
};
export default WindStatusCard;
