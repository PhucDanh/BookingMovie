export const styles = () => {
    return {
        boxContainer: {
            backgroundColor: "black",
            margin: "50px 50px 10px",
            color: "white",
            "& .title": {
                color: "#FF0061",
                textAlign: "center",
                fontSize: "50px",
                fontWeight: "800"
            },
        },
        gridContainer: {
            padding: "40px 20px",
        },
        columnLeft: {
            borderRight: "2px solid #fffaf0",
            borderLeft: "2px solid #fffaf0",
            padding: "0 20px",
            "& .screen": {
                width: "80%",
                margin: "10px auto",
                backgroundColor: "#FF3333",
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "600",
                borderRadius: "20px"
            },
        },
        listSeat: {
            paddingBottom: "30px",
            marginBottom: "30px",
            "& .seatItem": {
                margin: "10px 5px",
                padding: "0 auto",
                "& .button": {
                    backgroundColor: "#D7DBDD",
                    textAlign: "center",
                    fontWeight: "bold",
                    padding: "5px 0px",
                }
            }
        },
        columnRight: {
            borderRight: "2px solid #fffaf0",
            borderLeft: "2px solid #fffaf0",
            // margin: "10px auto",
            padding: "0 20px",
            "& .boxItem": {
                marginBottom: "20px",
                paddingBottom: "20px",
                margin: "10px auto",
                borderBottom: "1px solid #fffaf0",
            },
        },
        userInfor: {
            backgroundColor: "white",
            padding: "4px 5px",
            margin: "2px auto"
        },
        boxPayButton: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            "& .button": {
                margin: "10px auto",
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
            }
        }
    }
}