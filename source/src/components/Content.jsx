import React from "react"
import partidas_json from "../partidas.json"

import Partida from "./Partida"
import GrupoTabela from "./GrupoTabela"

export default function Content({ page, paginas }) {
   const partidas_dessa_fase = partidas_json.partidas.filter(
      (partida) => partida.fase === paginas[page].id
   )

   const grupos = ["A", "B", "C", "D", "E", "F", "G", "H"]
   if (page === 0)
      return (
         <div className="flex flex-col gap-5 mb-20">
            {grupos.map((grupo) => (
               <GrupoTabela key={grupo} grupo={grupo} />
            ))}
         </div>
      )

   return (
      <section className="flex flex-col gap-6 mb-20">
         <h3 className="text-3xl font-bold">TABELA</h3>
         {partidas_dessa_fase.map((partida, index) => (
            <Partida
               key={JSON.stringify(partida)}
               page={page}
               partida={partida}
               index={index}
               className="border-gray-400 rounded border-[1px]"
            />
         ))}
      </section>
   )
}
