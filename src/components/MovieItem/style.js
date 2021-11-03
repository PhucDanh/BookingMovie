export const styles = () => {
    return {
        cardActions: {
            opacity: 0,
            display: "none",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            height:"101px",
            transition: "all .5s",
            "& .button": {
                fontSize: "18px",
                fontWeight: "800",
                color: "#fff",
                textDecoration: "none",
                textTransform: "uppercase",
                display: "inline - block",
                backgroundColor: "#ff0e83",
                border: "1px solid #fff",
                /*outline bỏ đường viền của trình duyệt */
                outline: "none",
                padding: "10px 80px",
                borderRadius: "5px",
                transition: "all .5s",
                "&:hover": {
                    color: "#ff0000",
                    border: "2px solid #ff0e83",
                    backgroundColor: "white",
                }
            },
            "& .link": {
                textDecoration: "none",
            },

        },
        card: {
            position: "relative",
            margin: "10px 20px",
            "&:hover": {
                "& $cardActions": {
                    opacity: 1,
                    display: "flex",
                },
                "& .cardContent": {
                    opacity: 0,
                    display: "none"
                },
                "& $cardActionAreaHover": {
                    transform: "scale(1)",
                }
            },
            "& .cardContent": {
                opacity: 1,
                height: "85px",
                transition: "all .5s",
                "& .text": {
                    color: "#191970",
                    fontWeight: "bold"
                }
            },
        },
        cardActionAreaHover: {
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.479)",
            width: "400px",
            height: "400px",
            transform: "scale(0)",
            transition: "all .5s",
            "& .icon": {
                position: "absolute",
                fontSize: "90px",
                top: 140,
                left: 100,
                color: "#ffefd5",   
            },
        }
    }
}