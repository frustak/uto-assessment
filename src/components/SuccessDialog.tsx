import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/core";
import { useDialog } from "../store/hooks";

const useStyles = makeStyles({
    root: {
        background: "#a2cf6e",
    },
    text: {
        padding: "20px 40px",
    },
});

export default function SuccessDialog() {
    const dialog = useDialog();
    const classes = useStyles();

    return (
        <Dialog open={dialog.isOpen} onClose={dialog.close}>
            <DialogContent className={classes.root}>
                <DialogContentText className={classes.text}>
                    Post updated successfully
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}
