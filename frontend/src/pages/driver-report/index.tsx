'use client'
import BodyApp from "@/components/BodyApp";
import SideBar from "@/components/SideBar";

import { useState, ChangeEvent } from "react";


export default function DriverReport() {

	const [ startDate, setStartDate] = useState<string>()  
  const [ endDate, setEndDate] = useState<string>()      

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log("data: ", startDate, endDate)  
        
	}


	return (
			
		<BodyApp>
			<div className="flex w-full">

				<SideBar />

				<form className="w-full" encType="multipart/form-data" onSubmit={handleValueChange} >
					<h1 className="mt-12 text-4xl">Relatório</h1>
					<div className="flex mt-8">
						<label className="p-2 mr-2" htmlFor="">Inicio</label>
						<input 
								value={startDate} 
								onChange={e => setStartDate(e.target.value)} 
								className="border-2 p-2 rounded-lg"
								id="date" 
								type="date" />
					</div>

					<div className="flex mt-2">
						<label className="p-2 mr-2" htmlFor="">Inicio</label>
						<input 
								value={endDate} 
								onChange={e => setEndDate(e.target.value)} 
								className="border-2 p-2 rounded-lg"
								id="date" 
								type="date" />

					</div>

					<div className="flex mt-2">
						<label className="p-2 " htmlFor="">Driver</label>

						<select name="driver" id="driver" className="border-2 p-2 rounded-lg">
							<option value="volvo">All</option>
							<option value="volvo">William de Angelo</option>
							<option value="saab">Samanta C. de Jesus</option>
							<option value="mercedes">Henrique Lima</option>
						</select>

					</div>
					
						<button type="submit" className="border-2 p-2 mt-6 rounded-lg ml-16 hover:bg-gray-400">Filtrar</button>


					<div className="mt-8 w-full" >

						<table className="border-2 w-full">

						<thead className="border-2 w-96 bg-gray-400">
							<tr className="border-2">
								<th className="border-2">Data Entrega</th>
								<th className="border-2">Driver</th>
								<th className="border-2">Nº T.O.</th>
								<th className="border-2">Qtd. Pacotes</th>
								
								<th className="border-2">cidade</th>
								<th className="border-2">Pcts Avulso</th>
								<th className="border-2">Valor</th>
							</tr>
						</thead>

						<tbody className="border-2">

							<tr  className="border-2">
								<td className="border-2">20/09/2023</td>
								<td className="border-2">William de Angelo</td>
								<td className="border-2">TO0000215</td>
								<td className="border-2">80</td>
								<td className="border-2">JAU</td>
								<td className="border-2">5</td>
								<td className="border-2">R$ 300,00</td>
							</tr>
							<tr  className="border-2">
								<td className="border-2">20/09/2023</td>
								<td className="border-2">William de Angelo</td>
								<td className="border-2">TO0000215</td>
								<td className="border-2">80</td>
								<td className="border-2">JAU</td>
								<td className="border-2">5</td>
								<td className="border-2">R$ 300,00</td>
							</tr>

						</tbody>

						</table>
						</div>
						</form>


		</div>


		</BodyApp>
			

    )
}
