import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

export default function Navegacao({ paginas, page, setPage, size = 4 }) {
   const maxPage = Object.keys(paginas).length - 1

   function back() {
      setPage((page) => {
         if (page <= 0) return 0
         return page - 1
      })
   }

   function forward() {
      setPage((page) => {
         if (page >= maxPage) return maxPage
         return page + 1
      })
   }

   return (
      <div className="flex flex-col w-full border-b-[2px] p-2">
         <div className="flex justify-center items-center w-full">
            <button
               type="button"
               title="back"
               className={`mr-auto pl-0 py-0 ${
                  page <= 0 ? "text-gray-400" : "text-purple-600"
               } focus:outline-none ${
                  page > 0 ? "hover:brightness-75" : ""
               } md:pr-16`}
               style={{
                  fontSize: `${size * 4 + 16}px`,
               }}
               onClick={back}
               disabled={page <= 0}
            >
               <IoIosArrowBack />
            </button>
            <h2
               className={`font-semibold whitespace-nowrap`}
               style={{ fontSize: `${size * 4 + 16}px` }}
            >
               {paginas[page].title}
            </h2>
            <button
               type="button"
               title="forward"
               className={`ml-auto pr-0 py-0 ${
                  page >= maxPage ? "text-gray-400" : "text-purple-600"
               } focus:outline-none ${
                  page < maxPage ? "hover:brightness-75" : ""
               } md:pl-16`}
               style={{
                  fontSize: `${size * 4 + 16}px`,
               }}
               onClick={forward}
               disabled={page >= maxPage}
            >
               <IoIosArrowForward />
            </button>
         </div>
      </div>
   )
}
