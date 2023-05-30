import '../styles/tokens-grid.css'

interface TokensGridProps {
    tokens: Record<string, string>
    hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {//recebe tokens do space.stories
    return (
        <table className="tokens-grid">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    {hasRemValue && <th>Pixels</th>//se tiver voce colocar o pixels
                    }
                </tr>
            </thead>

            <tbody>
                {Object.entries(tokens).map(([key, value]) => {
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                            {hasRemValue && (
                                <td>{Number(value.replace('rem', '')) * 16}px</td>//tirar o rem e coloca nada e * por 16
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}