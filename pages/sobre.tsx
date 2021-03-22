import Link from 'next/link'


function Title (props) {
    return (
        <h1 style={{ color: props.color }}>{props.children}</h1>
    )
}

function sobre() {
    return (
        <div>
            <header>
                <Title color="magenta">Página Sobre</Title>
                <img src="..." alt="teste"/>
            </header>

            <Link href="/">
                <a>
                    Voltar pra Home
                </a>
            </Link>

        </div>
    )
}

export default sobre
