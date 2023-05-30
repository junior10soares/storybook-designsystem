import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>//se houver um prefixo
            }
            <Input {...props} //pega todas as propriedades, name,placeholder vai ser passado p input
            />
        </TextInputContainer>
    )
}
TextInput.displayName = 'TextInput'
