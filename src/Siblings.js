import * as React from "react"
import SiblingEmitter, {SiblingEvents} from "./SiblingEmitter";
import type {NodeItem} from "./Types";

type State = {
    elements: {
        [key: number]: React.Element
    }
};

export default class Siblings extends React.PureComponent<void, State> {

    _listeners = [];

    state = {
        elements: {}
    };

    render() {
        const keys = Object.keys(this.state.elements);
        if (keys.length > 0) {
            return keys.map((key) => this.state.elements[key]);
        }
        return null;
    }

    componentDidMount() {
        this._listeners.push(
            SiblingEmitter.addListener(SiblingEvents.append, (item: NodeItem) => {
                this.setState(({elements}) => {
                    return {
                        elements: {
                            ...elements,
                            [item.id]: item.node
                        }
                    }
                });
            })
        );
        this._listeners.push(
            SiblingEmitter.addListener(SiblingEvents.remove, (id: number) => {
                this.setState(({elements}) => {
                    delete elements[id];
                    return {
                        elements: {...elements}
                    };
                })
            })
        )
    }

    componentWillUnmount() {
        this._listeners.forEach(listener => listener.remove());
    }
}