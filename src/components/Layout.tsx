import { AppBar, Box, Container, makeStyles } from "@material-ui/core";
import SuccessDialog from "./SuccessDialog";

const useStyles = makeStyles({
    appBar: {
        height: 80,
    },
    content: {
        marginTop: 80,
    },
});

type LayoutProps = {
    children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
    const classes = useStyles();

    return (
        <Container>
            <AppBar className={classes.appBar} />
            <Box className={classes.content}>{children}</Box>
            <SuccessDialog />
        </Container>
    );
}

export default Layout;
