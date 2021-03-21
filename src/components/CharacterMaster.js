import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export class Alert extends React.Component {

    render() {
        return <MuiAlert elevation={6} variant="filled" {...this.props} />;
    }
}

export class CharacterMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = { characters: props.characters, show_confirmation: false, confirmation_message: "" };
    }

    character_details(item) {
        return <Tooltip title={`click to add ${item.name}`}><ListItem button className={(item.belongs_to_team) ? "team" : ""} key={item.uuid} onClick={this.on_click.bind(this, item)}>{item.name}</ListItem></Tooltip>;
    }

    characters_list() {
        return this.state.characters.map(item => {
            return this.character_details(item);
        });
    }

    on_click(character) {

        this.setState({
            characters: this.state.characters.map(element => {
                if (element.uuid === character.uuid) {
                    element.belongs_to_team = !element.belongs_to_team;
                }
                return element;
            }),
            show_confirmation: true,
            confirmation_message: (character.belongs_to_team) ? "Added to team" : "Removed from team"

        });


    }

    on_close() {
        this.setState({ show_confirmation: false });
    }

    handleClose() {
        this.setState({ show_confirmation: false });
    }

    render() {
        return <section>

            <List component="nav">{this.characters_list()}</List>
            <Snackbar autoHideDuration={1000} onClose={this.handleClose.bind(this)} open={this.state.show_confirmation} message={this.state.confirmation_message}>
            </Snackbar>

        </section>;
    }


}

