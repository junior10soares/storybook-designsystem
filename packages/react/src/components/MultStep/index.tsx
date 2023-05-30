import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
    size: number
    currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {//começa com barra prenchida no 1
    return (
        <MultiStepContainer>
            <Label>
                Passo {currentStep} de {size}
            </Label>

            <Steps css={{ '--steps-size': size }}//crio uma variavel com o valor inicial 4
            >
                {Array.from({ length: size }, (_, i) => i + 1).map((step) => {//crio o array com 4 posiçoes, conteudo 0 com indice
                    return <Step key={step} active={currentStep >= step} />//retorna o estilo e se for active vai colocando o estilo da barra
                })}
            </Steps>
        </MultiStepContainer >
    )
}
MultiStep.displayName = 'MultiStep' // nome para aparecer no storybook
