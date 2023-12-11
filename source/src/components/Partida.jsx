import React from "react"
import Flag from "react-world-flags"

export default function Partida({ page, partida, index, className = "" }) {
   const dias_da_semana = {
      0: "Domingo",
      1: "Segunda",
      2: "Terça",
      3: "Quarta",
      4: "Quinta",
      5: "Sexta",
      6: "Sábado",
   }

   function epoch_to_datetime_display(epoch) {
      const datetime = new Date(epoch * 1000)
      // TODO: FIX TIMEZONE
      const formatter = new Intl.DateTimeFormat("pt-br", {
         hour12: false,
         hour: "numeric",
         minute: "2-digit",
         timeZone: "Atlantic/South_Georgia",
      })

      formatter.format(new Date())

      return `${datetime.getDate()}/${datetime.getMonth()} • ${
         dias_da_semana[datetime.getDay()]
      } • ${formatter.format(datetime)}`
   }

   const tooltipStyle =
      "absolute top-0 -translate-y-8 text-gray-600 bg-white px-3 py-[1px] border-[1px] rounded-full border-gray-300"
   const tooltip = {
      0: null,
      1: <span className={tooltipStyle}>oitavas {index + 1}</span>,
      2: <span className={tooltipStyle}>quartas {index + 1}</span>,
      3: <span className={tooltipStyle}>semifinal {index + 1}</span>,
      4: <span className={tooltipStyle}>disputa do 3º lugar</span>,
      5: <span className={tooltipStyle}>final</span>,
   }

   return (
      <article
         key={partida.datetime}
         className={`grow pb-8 flex flex-col justify-center gap-3 py-4 md:px-12 px-2 whitespace-nowrap ${className}`}
      >
         <header className="relative w-full flex gap-4 justify-center">
            {tooltip[page]}
            <span>{partida.estádio}</span>
            <span className="font-bold">
               {epoch_to_datetime_display(partida.datetime)}
            </span>
         </header>
         <div className="flex h-8 items-center gap-3 justify-center">
            <span className="text-xl font-thin whitespace-nowrap">
               {partida.time_1.nome}
            </span>
            <Flag
               code={partida.time_1.sigla}
               style={{
                  width: "30px",
                  objectFit: "fill",
                  border: "1px solid lightgray",
               }}
            />
            <span className="text-3xl font-bold">{partida.time_1.gols}</span>
            <span>✕</span>
            <span className="text-3xl font-bold">{partida.time_2.gols}</span>
            <Flag
               code={partida.time_2.sigla}
               style={{
                  width: "30px",
                  objectFit: "fill",
                  border: "1px solid lightgray",
               }}
            />
            <span className="text-xl font-thin whitespace-nowrap">
               {partida.time_2.nome}
            </span>
         </div>
      </article>
   )
}
