const VisibilityCard = (props) => {
    const { visibility } = props;
    return (
        <>
            <div>
                <p>
                    {visibility / 1000}
                    <span>km</span>
                </p>
            </div>
        </>
    );
};
export default VisibilityCard;
