export function Hola({ nombre, bol }) {
  console.log(nombre)
  return (
    <div>
      <p>Hola {nombre}</p>
      <p style={bol ? { backgroundColor: 'purple' } : { backgroundColor: 'red' }}> {bol ? 'Correcto' : 'Incorrecto'}</p>
    </div>
  )
}

