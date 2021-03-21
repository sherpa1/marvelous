import React from "react";


export default class CharacterMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = { characters: props.characters };
    }

    character_details(item) {
        return <li className={(item.belongs_to_team) ? "team" : ""} key={item.uuid} onClick={this.on_click.bind(this, item)}>{item.name}</li>;
    }

    characters_list() {
        return this.state.characters.map(item => {
            return this.character_details(item);
        });
    }

    on_click(character) {

        this.setState({
            characters: this.state.characters.map(element => {
                if (element.uuid === character.uuid) element.belongs_to_team = !element.belongs_to_team;
                return element;
            })
        });
    }

    render() {
        return <ul>{this.characters_list()}</ul>;
    }


}

