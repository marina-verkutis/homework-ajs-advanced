interface KeyValue {
    key: string;
    value: any;
}

export function orderByProps(obj: { [key: string]: any }, order: string[]): KeyValue[] {
    const orderedProps: KeyValue[] = [];
    const unorderedProps: string[] = [];

    for (const prop of order) {
        if (obj.hasOwnProperty(prop)) {
            orderedProps.push({ key: prop, value: obj[prop] });
        }
    }

    for (const prop in obj) {
        if (!order.includes(prop)) {
            unorderedProps.push(prop);
        }
    }
    unorderedProps.sort();

    for (const prop of unorderedProps) {
        orderedProps.push({ key: prop, value: obj[prop] });
    }

    return orderedProps;
}
