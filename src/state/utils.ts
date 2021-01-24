import React from 'react';

type setState<T> = React.Dispatch<React.SetStateAction<T>>
type HTMLChangeEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>

export const onChange = <T>(setState: setState<T>, converter?: ((arg: any) => any) | undefined) => (e: HTMLChangeEvent) => {
    let value: any;
    if (converter) {
        value = converter(e.target.value);
    } else {
        value = e.target.value;
    }
    setState((previous) => ({
        ...previous,
        [e.target.name]: value
    }));
};
