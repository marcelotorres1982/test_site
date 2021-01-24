import { useState } from 'react';

function HOME() {
    return (
        <div>
            <h1>Home </h1>
            <Contador />
            <div>Teste</div>
        </div>
    )
}
function Contador () {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>Contador</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default HOME