export const styles = () => {
    return {
        gridItem: {
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "center",
            alignItems: "center",
            margin: "30px 0 20px",
            "& .typo": {
                color: "#4169e1",
                fontSize: "16px",
                fontWeight: "bold",
            }
        },
        boxButton: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            marginTop: "20px",
            "& .buttonItem": {
                margin: "20px 20px"
            },
            "& .link": {
                textDecoration: "none"
            }
        }
    }
}