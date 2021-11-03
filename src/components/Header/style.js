export const styles = () => {
    return {
        tittle: {
            flexGrow: 1,
        },
        navLink: {
            color: "#ffffff",
            marginLeft: 20,
            fontSize: 18,
            opacity: 0.8,
            "&:hover": {
                color: "#00ffff",
            }
        },
        activeNavLink: {
            opacity: 1
        }
    }
}