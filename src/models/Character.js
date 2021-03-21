export default class Character {
    constructor(uuid, name, image) {
        this.uuid = uuid;
        this.name = name;
        this.image = image;
        this.belongs_to_team = false;
    }
}