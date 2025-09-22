import React, {useState, useEffect} from "react";

function AvisoTemporizado() {
  // controla se a mensagem está visível
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    // cria o temporizador
    const timer = setTimeout(() => {
      setVisivel(false); // esconde a mensagem após 3s
    }, 3000);

    // limpa o temporizador se o componente for desmontado antes dos 3s
    return () => clearTimeout(timer);
  }, []);

  // só renderiza se ainda estiver visível
  return (
    <div>
      {visivel && <h2>Bem-vindo!</h2>}
    </div>
  );
}

export default AvisoTemporizado;