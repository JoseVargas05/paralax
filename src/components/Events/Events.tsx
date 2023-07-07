import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse";
import "./events.css";

export const Events = () => {
    return (
        <>
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    background: "#01011A",
                    color: "#fff",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <MouseParallaxContainer
                        className="parallax"
                        containerStyle={{
                            width: "100%",
                            display: "grid",
                            paddingTop: "100px",
                            paddingBottom: "100px",
                            gridTemplateColumns: "auto"
                        }}
                        globalFactorX={0.3}
                        globalFactorY={0.3}
                        resetOnLeave
                    >
                        <MouseParallaxChild
                            factorX={0.6}
                            factorY={0.1}
                            style={{
                                background:
                                    "url(https://res.cloudinary.com/dhga15zq8/image/upload/v1688751863/EDDYMUGRE/train_mftgei.jpg",
                                backgroundPositionY: "50%",
                                transform: "scale(1.2)",
                                position: "absolute",
                                filter: "blur(4px) brightness(50%)",
                                backgroundSize: "auto",
                                backgroundRepeat: "repeat",
                                width: "100%",
                                height: "100%",
                                backfaceVisibility: "hidden",
                                zIndex: 9,
                            }}
                        >
                            <div className="gradient2 inset" />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.9}
                            factorY={0.5}
                            style={{
                                /*filter: "invert(1)",*/
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 10,
                            }}
                        >
                            <div className="center column">
                                <h2 className="headline">PRÓXIMOS EVENTOS</h2>
                                <img className="event-01" src="evento-01.jpg" alt="" />
                            </div>

                        </MouseParallaxChild>

                    </MouseParallaxContainer>
                </div>
            </div>
        </>
    );
}
