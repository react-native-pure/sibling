import * as React from "react"
import {Text, Animated} from "react-native"
import renderer from 'react-test-renderer'
import WrapperComponent from "../src/WrapperComponent"
import Sibling from "../src/Sibling"

test("mount <WrapperComponent/>", () => {
    const component = renderer.create(
        <WrapperComponent/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test(`mount <WrapperComponent/> with children`, () => {
    const component = renderer.create(
        <WrapperComponent>
            <Text>abc</Text>
        </WrapperComponent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test(`append/remove Sibling element`, () => {
    const component = renderer.create(
        <WrapperComponent>
            <Text>Append Sibling Element</Text>
        </WrapperComponent>
    );
    const remove = Sibling.append(
        <Text>I am a sibling element</Text>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    remove();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test(`update sibling element`, () => {
    class Test extends React.Component {
        state = {
            message: ""
        };

        render() {
            return <Text>{this.state.message}</Text>
        }

        hello() {
            this.setState({message: "hello"});
        }
    }

    let testRef = null;

    const component = renderer.create(
        <WrapperComponent>
            <Test ref={ref => testRef = ref}></Test>
        </WrapperComponent>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    testRef.hello();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test(`can not append when unmount`, () => {
    const component = renderer.create(
        <WrapperComponent>
        </WrapperComponent>
    );
    component.unmount();
    Sibling.append(
        <Text>hello</Text>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

// test(`append Animated.Text`, () => {
//     const component = renderer.create(
//         <WrapperComponent>
//         </WrapperComponent>
//     );
//     Sibling.append(
//         <Animated.Text>Animated Text</Animated.Text>
//     );
//     expect(component.toJSON()).toMatchSnapshot();
// });