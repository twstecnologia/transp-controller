import BodyApp from "@/components/BodyApp";
import SideBar from "@/components/SideBar";
import StateSelect from "@/components/StateSelect";

export default function Create() {
	return (
		<BodyApp>

			<SideBar/>
				
			<section >

				<h1 className="text-5xl">Cidade</h1>

				<form>

					<div className="space-y-12">

						<div className="border-gray-900/10 pb-12">

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6">

							<div className="sm:col-span-3">
								<StateSelect />
							</div>

							<div className="lg:col-span-3">
													
							<input id="city" name="city" type="text" autoComplete="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3" />
													
							</div>

							<div className="lg:col-span-4">
								<label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">Valor da Rota</label>
								<div className="mt-2">
									<input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3" />
								</div>
							</div>


									
						</div>

						</div>


					</div>

						<div className="mt-6 flex items-center  gap-x-6">
							<button type="submit" className="rounded-md bg-red-500 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancelar</button>
							<button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Salvar</button>
						</div>
				</form>
			</section>
		</ BodyApp>

	)

}
