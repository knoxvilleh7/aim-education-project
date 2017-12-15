import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export class UserInfoDialog extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton key={1}
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton key={2}
                label="Ok"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Details" primary={true} onClick={this.handleOpen} />
                <Dialog
                    title="User details"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    Unfortunately this is not available
                </Dialog>
            </div>
        );
    }
}

export default UserInfoDialog;