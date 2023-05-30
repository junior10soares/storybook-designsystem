import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send', //por padrao
        variant: 'primary',
        size: 'md',
        disabled: false
    },
    argTypes: {
        variant: { //colocar no storybook seleçao de botoes de variaçoes de pri, sec, ter
            options: ['primary', 'secundary', 'tertiary'],
            control: { type: 'inline-radio' }
        },
        size: { //colocar no storybook seleçao de tam botoes
            options: ['sm', 'md'],
            control: { type: 'inline-radio' }
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        },
        onClick: {
            action: 'click'
        }
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create new',
    },
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
    },
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    },
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Próximo passo
                <ArrowRight weight="bold" />
            </>
        ),
    },
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    },
}