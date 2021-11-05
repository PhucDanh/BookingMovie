export const styles = () => {
    return {
        cardActions: {
            opacity: 0,
            display: "none",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            height:"81px",
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
                padding: "10px 35px",
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
                    transform: "rotate(0deg)",
                    opacity: 1,
                }
            },
            "& .cardContent": {
                opacity: 1,
                height: "65px",
                transition: "all .5s",
                "& .text": {
                    color: "#191970",
                    fontWeight: "bold"
                }
            },
        },
        cardActionAreaHover: {
            position: "absolute",
            bottom: 0,
            left: 0,
            opacity: 0,
            backgroundColor: "rgba(0, 0, 0, 0.479)",
            width: "400px",
            height: "400px",
            transform: "rotate(3600deg)",
            transition: "all .5s",
            "& .content": {
                position: "absolute",
                bottom: 0,
                left: 0,
                padding: "0px 50px 15px 20px" 
            },
            "& .textName": {
                fontSize: "30px",
                fontStyle: "italic",
                color: "#ffefd5",   
            },
            "& .textDetail": {
                fontSize: "15px",
                fontWeight: "100",
                color: "#ffefd5",
            }
        }
    }
}