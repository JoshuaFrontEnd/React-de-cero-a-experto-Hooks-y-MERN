// - Exportacion por "default"
// function App() {
//   return <h1>Hola Mundo!!!</h1>
// }

// export default App

// - Exportacion por funcionalidad
// export function App() {
//   return <h1>Hola Mundo!!!</h1>
// }

// - Exportacion por funcionalidad usando arrow function y nombre personalizado con el comando "rafc"
export const HelloWorldApp = () => {
  return (
    <h1>Hello World App</h1>
  )
}
