export const styles = () => {
    return {
        detail: {
            margin: "50px 30px"
        },
        detailContent: {
            margin: "50px auto",
            border: "3px solid #85144b",
            borderRadius: "40px",
            "& .name": {
                textAlign: "center",
                marginBottom: "60px",
                fontSize: "50px",
                fontWeight: "800",
                color: "#ffa07a",
                textDecoration: "none",
                textTransform: "uppercase",
            },
            "& .description": {
                padding: "30px",
                color: "#dc143c",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "20px",
            }
            
        },
        boxButton: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            marginTop: "40px",
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
                padding: "10px 50px",
                margin: "auto 20px",
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
        }
    }
}