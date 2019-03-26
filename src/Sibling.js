import * as React from "react"
import SiblingEmitter, {SiblingEvents} from "./SiblingEmitter";

class Sibling {
    constructor() {
        this.id = 0;
    }

    append(element: React.Element) {
        const id = this.id;
        SiblingEmitter.emit(SiblingEvents.append, {
            id: id,
            node: React.cloneElement(element, {
                key: `sibling-${id}`
            })
        });
        this.id++;
        return function () {
            SiblingEmitter.emit(SiblingEvents.remove, id);
        };
    }
}

export default new Sibling();