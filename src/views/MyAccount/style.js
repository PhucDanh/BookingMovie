export const styles = () => {
    return {
        columnLeft: {
            backgroundColor: "#34495E",
            // height: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            // alignItems: "center",
            // marginRight: "5px",
            "& .boxItem": {
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                margin: "20px auto",
                "& .button": {
                    // fontSize: "30px",
                    fontWeight: "800",
                    color: "#fff",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    display: "inline - block",
                    backgroundColor: "#ff0e83",
                    border: "1px solid #fff",
                    /*outline bỏ đường viền của trình duyệt */
                    borderRadius: "100%",
                    outline: "none",
                    padding: "30px",
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
                "& .listItem": {
                    margin: "10px auto",
                    backgroundColor: "#5D6D7E",
                    textAlign: "center",
                    "& .listText": {
                        margin: "5px auto",
                        color: "#D2B4DE",
                        fontSize: "20px",
                        fontWeight: "800",
                        fontStyle: "italic"
                    }
                }
            }
        },

        columnRight: {
            // marginLeft: "5px"
        }
    }
}