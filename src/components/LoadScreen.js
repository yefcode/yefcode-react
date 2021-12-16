const LoadScreen = () => {
    // $(window).on("load", function () {
    //     $("#load-screen").fadeOut(500);
    // });
    return (
        <div className="load-screen">
            <div className="load-screen-content">
                <div className="lds-hourglass"></div>
                <h2 className="load-title">LOADING</h2>
            </div>
	    </div>
    )
}

export default LoadScreen