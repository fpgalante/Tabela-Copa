import { useState } from "react"
import "./App.css"
import Navegacao from "./components/Navegacao"
import Content from "./components/Content"
import TitleBar from "./components/TitleBar"

function App() {
   const [page, setPage] = useState(0)

   const paginas = {
      0: {
         title: "FASE DE GRUPOS",
         id: "fase-de-grupos",
      },
      1: {
         title: "OITAVAS DE FINAL",
         id: "oitavas",
      },
      2: {
         title: "QUARTAS DE FINAL",
         id: "quartas",
      },
      3: {
         title: "SEMIFINAL DE FINAL",
         id: "semi",
      },
      4: {
         title: "DISPUTA DO 3º LUGAR",
         id: "terceiro-lugar",
      },
      5: {
         title: "FINAL",
         id: "final",
      },
   }

   return (
      <div className="w-full flex flex-col items-center">
         <TitleBar />
         <div className="flex flex-col min-w-[75%] md:px-6">
            <header className="mb-8">
               <Navegacao page={page} setPage={setPage} paginas={paginas} />
            </header>
            <main>
               <Content page={page} paginas={paginas} />
            </main>
         </div>
      </div>
   )
}

export default App
