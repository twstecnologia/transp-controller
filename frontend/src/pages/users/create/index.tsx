import BodyApp from "@/components/BodyApp";
import SideBar from "@/components/SideBar";

export default function Create() {
	return (
		<BodyApp>

			<SideBar/>
				
				<section >

					<h1 className="text-5xl">Cadastro de Usuário</h1>

						<form>

              <div className="space-y-12">

                <div className="border-gray-900/10 pb-12">

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6">

                    <div className="lg:col-span-3">
												<label htmlFor="name" className="block text-lg font-medium leading-6 text-gray-900">Nome completo</label>
												<div className="mt-2">
													<input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3 " />
												</div>
                    </div>

										<div className="lg:col-span-3">
											<label htmlFor="cpf" className="block text-lg font-medium leading-6 text-gray-900">CPF</label>
											<div className="mt-2">
												<input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3" />
											</div>
										</div>

										<div className="lg:col-span-4">
											<label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">E-mail</label>
											<div className="mt-2">
												<input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3" />
											</div>
										</div>

										<div className="lg:col-span-3">
											<label htmlFor="WhatsApp" className="block text-lg font-medium leading-6 text-gray-900">WhatsApp</label>
											<div className="mt-2">
												<input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3" />
											</div>
										</div>

										<div className="sm:col-span-3">
											<label htmlFor="cargo" className="block text-lg font-medium leading-6 text-gray-900">Cargo</label>
											<div className="mt-2">
												<input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3 " />
											</div>
										</div>

										<div className="sm:col-span-3">
											<label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">senha</label>
											<div className="mt-2">
												<input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-6 p-3 " />
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
