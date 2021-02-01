import React from 'react';
import { Shleemy } from './index';
import renderer from 'react-test-renderer';

describe("shleemy component", () => {
  it("Just now", () => {
    const component = renderer.create(
      <Shleemy date={new Date()} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Future", () => {
    const date = new Date();
    date.setHours(date.getHours() + 1);

    const component = renderer.create(
      <Shleemy date={date} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Past", () => {
    const date = new Date();
    date.setHours(date.getHours() - 1);

    const component = renderer.create(
      <Shleemy date={date} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
