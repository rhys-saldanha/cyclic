import React from 'react';
import {SetterOrUpdater} from 'recoil';
import {useHistory} from 'react-router-dom';

type setState<T> = React.Dispatch<React.SetStateAction<T>>
type HTMLChangeEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>

export const onChange = <T>(setState: setState<T>, converter?: ((arg: any) => string)) => (e: HTMLChangeEvent) => {
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

export const useSubmit = <T>(setter: SetterOrUpdater<T[]>, nextRoute: string = '/') => {
    const history = useHistory();

    return (value: T) => () => {
        setter(currentList => [...currentList, value]);
        history.push(nextRoute);
    };
};

export const formatDate = (date: string) => {
    return new Date(date).toISOString().substring(0, 10);
};
