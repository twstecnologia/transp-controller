import BodyApp from "@/components/BodyApp";
import ProtectRoute from "@/components/ProtectRoute";
import SideBar from "@/components/SideBar";
import { useState } from "react";

export default function Rotas() {
    const [deliveryMan, setDeliveryMan] = useState('') 
    const [roteId, setRoteId] = useState('')
    const [inputs, setInputs] = useState([{ id: 1, value: "" }]);

   function handleLogin() {}

  const addInput = () => {
    setInputs([...inputs, { id: inputs.length + 1, value: "" }]);
  };

  const removeInput = (idToRemove: any) => {
    const updatedInputs = inputs.filter((input) => input.id !== idToRemove);
    setInputs(updatedInputs);
  };

  const handleInputChange = (id: any, value: any) => {
    const updatedInputs = inputs.map((input) =>
      input.id === id ? { ...input, value } : input
    );
    setInputs(updatedInputs);
  };

    return (
        //<ProtectRoute>
            
        <BodyApp>
        <SideBar/>

            <section >
                <h1 className="text-5xl">Rotas</h1>


                <form>
                  <div className="space-y-12">


                    <div className="border-gray-900/10 pb-12">


                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6">
                      <div className="lg:col-span-3">
                          <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">Driver</label>
                          <div className="mt-2">
                            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:max-w-xs lg:text-lg lg:leading-6">
                              <option>Diego</option>
                              <option>Andre</option>
                              <option>Willian</option>
                            </select>
                          </div>
                        </div>

                        <div className="lg:col-span-3">
                          <label htmlFor="cpf" className="block text-lg font-medium leading-6 text-gray-900">Nº T.O</label>
                          <div className="mt-2">
                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3" />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="whatsapp" className="block text-lg font-medium leading-6 text-gray-900">Quantidade de PCTs</label>
                          <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3 " />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="whatsapp" className="block text-lg font-medium leading-6 text-gray-900">Pacotes avulso</label>
                          <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3 " />
                          </div>
                        </div>

                        <div className="lg:col-span-3">
                          <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">Estado</label>
                          <div className="mt-2">
                            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:max-w-xs lg:text-lg lg:leading-6">
                              <option>São Paulo</option>
                              <option>Minas Gerais</option>
                              <option>Rio de Janeiro</option>
                            </select>
                          </div>
                        </div>

                        <div className="lg:col-span-3">
                          <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">Cidade</label>
                          <div className="mt-2">
                            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:max-w-xs lg:text-lg lg:leading-6">
                              <option>Leme</option>
                              <option>Bauru</option>
                              <option>Araras</option>
                            </select>
                          </div>
                        </div>

                        
                        <div className="sm:col-span-4">
                          <label htmlFor="valor" className="block text-lg font-medium leading-6 text-gray-900">Valor da Rota</label>
                          <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3 " />
                          </div>
                          
                        </div>

                        <div className="sm:col-span-4">

                          
                        <button 
                          type="button"
                          onClick={addInput}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        
                          >
                            Add Pct
                        </button>

                        {inputs.map((input) => (
                          <div key={input.id} className="mt-2">
                            <input
                              type="text"
                              name={`input-${input.id}`}
                              id={`input-${input.id}`}
                              autoComplete="off"
                              value={input.value}
                              onChange={(e) => handleInputChange(input.id, e.target.value)}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3"
                            />

                          <button
                            type="button"
                            onClick={() => removeInput(input.id)}
                            className="text-red-600 ml-2"
                          >
                            Remover
                          </button>
                          </div>
                        ))}
                        </div>

                          


                        
                      </div>
                    </div>


                  </div>

                  <div className="mt-6 flex items-center  gap-x-6">
                  <button type="submit" className="rounded-md bg-red-500 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancelar</button>
                  <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Salvar</button>
                  </div>
                </form>

                <form className="mt-8">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Importar Arquivo</label>
                  <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                  
                  <button type="submit" className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                
                </form>

            </section>
            </BodyApp>

       // </ProtectRoute>
    )
}