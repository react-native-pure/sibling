import {EventEmitter} from "fbemitter"

export const SiblingEvents = {
    append: "append",
    remove: "remove"
};

export default new EventEmitter();