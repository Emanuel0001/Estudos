/* percorrendo um map com um componente */


{times.map((time) => (
    <Time 
      key={time.nome}
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      /* filter/ filtrando somente o colaborador que pertence ao time desejado */
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />
  ))}