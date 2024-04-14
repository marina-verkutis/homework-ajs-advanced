import { orderByProps } from "../order";

test("Order object properties by specified order", () => {
    const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
    const orderedProps = orderByProps(obj, ["name", "level"]);
    expect(orderedProps).toEqual([
        { key: "name", value: "мечник" },
        { key: "level", value: 2 },
        { key: "attack", value: 80 },
        { key: "defence", value: 40 },
        { key: "health", value: 10 },
    ]);
});

test("Order object properties by specified order with missing properties", () => {
    const obj = { name: "мечник", attack: 80, defence: 40 };
    const orderedProps = orderByProps(obj, ["name", "level"]);
    expect(orderedProps).toEqual([
        { key: "name", value: "мечник" },
        { key: "attack", value: 80 },
        { key: "defence", value: 40 },
    ]);
});

test("Order object properties by specified order with no specified order", () => {
  const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
  const orderedProps = orderByProps(obj, []);
  expect(orderedProps).toEqual([
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
    { key: "level", value: 2 },
    { key: "name", value: "мечник" },
  ]);
});
