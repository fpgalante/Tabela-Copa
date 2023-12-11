import React, { useState } from "react"
import Navegacao from "./Navegacao"
import tabelasJson from "../tabelas.json"
import partidasJson from "../partidas.json"
import Partida from "./Partida"

export default function GrupoTabela({ grupo }) {
   const [rodada, setRodada] = useState(2)

   const paginas = {
      0: {
         title: "1ª RODADA",
      },
      1: {
         title: "2ª RODADA",
      },
      2: {
         title: "3ª RODADA",
      },
   }

   const tabelaGrupo = tabelasJson.tabelas.find(
      (tabela) => tabela.grupo === grupo
   )

   const partidasRodada = partidasJson.partidas.filter(
      (partida) => partida.grupo === grupo && partida.rodada === rodada + 1
   )

   return (
      <section className="flex flex-col">
         <h3 className="text-3xl font-bold mb-5">GRUPO {grupo}</h3>
         <hr className="w-full border-[1px]" />
         <div className="flex flex-col lg:flex-row">
            <div
               style={{ flexGrow: "2", flexBasis: "60%" }}
               className="flex lg:w-[60%]"
            >
               <table className="w-[250px] whitespace-nowrap">
                  <colgroup>
                     <col className="w-[25px]" />
                     <col />
                  </colgroup>
                  <thead className="border-b-[1px] border-r-[1px] border-gray-400">
                     <th
                        className="font-normal text-sm text-gray-500 text-left py-4"
                        colSpan={2}
                     >
                        CLASSIFICAÇÃO
                     </th>
                  </thead>
                  <tbody className="border-r-[1px] border-r-gray-400">
                     {tabelaGrupo.times.map((time, index) => (
                        <tr
                           key={time.nome}
                           className="text-xl border-b-[1px] border-b-gray-300 h-[65px] "
                        >
                           <td
                              className={`${
                                 index <= 1 ? "text-blue-600" : "text-gray-400"
                              } font-medium `}
                           >
                              {index + 1}
                           </td>
                           <td className="text-left">{time.nome}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <table
                  className="h-full block scrollbar-hidden"
                  style={{ overflowX: "scroll", width: "calc(100% - 250px)" }}
               >
                  <thead className="border-b-[1px] border-gray-400 text-sm text-gray-400 h-[52px] text-center">
                     <th className="px-[24px] whitespace-nowrap text-center">
                        P
                     </th>
                     <th className="px-[24px] whitespace-nowrap text-center">
                        J
                     </th>
                     <th className="px-[24px] whitespace-nowrap text-center">
                        V
                     </th>
                     <th className="px-[24px] whitespace-nowrap text-center">
                        E
                     </th>
                     <th className="px-[24px] whitespace-nowrap text-center">
                        D
                     </th>
                     <th className="px-[24px] whitespace-nowrap text-center">
                        GP
                     </th>
                     <th className="px-[24px] whitespace-nowrap text-center">
                        GC
                     </th>
                     <th className="px-[24px] whitespace-nowrap text-center">
                        SG
                     </th>
                     <th className="px-[24px] whitespace-nowrap text-center">
                        %
                     </th>
                     <th className="px-[24px] whitespace-nowrap text-center">
                        ÚLT.JOGOS
                     </th>
                  </thead>
                  <tbody className="text-gray-700 h-full">
                     {tabelaGrupo.times.map((time) => (
                        <tr
                           className="border-b-[1px] border-gray-300 text-xl text-center h-[65px]"
                           key={time}
                        >
                           <td className=" font-bold bg-slate-100">
                              {time.pontos}
                           </td>
                           <td className="">{time.jogos}</td>
                           <td className=" bg-slate-100">{time.vitorias}</td>
                           <td className="">{time.empates}</td>
                           <td className=" bg-slate-100">{time.derrotas}</td>
                           <td className="">{time.gols_pro}</td>
                           <td className=" bg-slate-100">{time.gols_contra}</td>
                           <td className="">{time.saldo_gols}</td>
                           <td className=" bg-slate-100 ">
                              {time.aproveitamento}
                           </td>
                           <td>
                              <div className="flex gap-1 items-center justify-center">
                                 {time.ultimos_jogos.map((resultado, index) => (
                                    <MarcadorResultado
                                       key={time + index}
                                       resultado={resultado}
                                    />
                                 ))}
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <article
               style={{ flexGrow: "1", flexBasis: "30%" }}
               className="border-gray-300 border-l-[1px] flex flex-col grow lg:w-[30%]"
            >
               <Navegacao
                  page={rodada}
                  setPage={setRodada}
                  paginas={paginas}
                  size={2}
               />

               {partidasRodada.map((partida) => (
                  <Partida
                     page={0}
                     partida={partida}
                     key={JSON.stringify(partida)}
                     className="border-b-[1px] border-gray-300"
                  />
               ))}
            </article>
         </div>
      </section>
   )
}

function MarcadorResultado({ resultado }) {
   const colors = {
      D: "bg-red-600",
      V: "bg-green-600",
      E: "bg-gray-300",
   }
   return (
      <span
         className={`block rounded-full w-2 h-2 ${colors[resultado]}`}
      ></span>
   )
}
