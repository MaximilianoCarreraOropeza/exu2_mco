import { useState } from 'react'
import SumaController from './modules/sumar.controller'

function App() {
  const [numeros, setNumeros] = useState({num1: 0, num2: 0})
  const [resultado, setResultado] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await SumaController.sumar(numeros)
    if(data && data.data !== undefined){
      setResultado(data.data)
    }
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Maximiliano Carrera Oropeza - 10 C
          </span>
        </div>
      </nav>

      <div className="container">
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="card-header">Examen Unidad 2 - Suma</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Número 1</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={numeros.num1}
                  onChange={(e) => setNumeros({...numeros, num1: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Número 2</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={numeros.num2}
                  onChange={(e) => setNumeros({...numeros, num2: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sumar</button>
            </form>

            {resultado !== null && (
              <div className="alert alert-success mt-3 text-center">
                <h4>Resultado: {resultado}</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
