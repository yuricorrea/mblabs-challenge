import React, { memo } from 'react';
import { TextInputProps } from 'react-native';
import * as Styled from './styles';

type T = {
    placeholder?: string,
    label: string,
    disabled?: boolean,
    value: string,
    onChangeText?: Function,
} & TextInputProps

const TextInput = (props: T): JSX.Element => {
    const { label, disabled, onChangeText  } = props;

    const setValue = (text: string) => {
        if(!disabled && onChangeText)
            onChangeText(text);
    }

    return(
        <Styled.Area>
            <Styled.Label>{label}</Styled.Label>
            <Styled.Input
                {...props}
                onChangeText={setValue}
            />
        </Styled.Area>
    )
}

export default memo(TextInput);
