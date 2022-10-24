import React, { memo } from 'react';
import { GestureResponderEvent } from 'react-native';
import theme from '../../theme';
import * as Styled from './styles';

type T = {
    placeholder?: string,
    label: string,
    disabled?: boolean,
    value: string,
    onChangeText?: Function,
}

const TextInput = (props: T): JSX.Element => {
    const { label, disabled, value, onChangeText, placeholder  } = props;

    const setValue = (text: string) => {
        if(!disabled && onChangeText)
            onChangeText(text);
    }

    return(
        <Styled.Area>
            <Styled.Label>{label}</Styled.Label>
            <Styled.Input
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
            />
        </Styled.Area>
    )
}

export default memo(TextInput);
