export default function CitySelect() {
	return (
		<>

			<select 
                id="countries" 
                className="
                    bg-gray-50 
                    border 
                    border-gray-300 
                    text-black-900 
                    text-sm 
                    rounded-lg 
                    focus:ring-blue-500 
                    focus:border-blue-500 
                    block w-full 
                    p-2.5 
                    dark:bg-white-700 
                    dark:border-gray-600 
                    dark:placeholder-gray-400 
                    dark:text-black 
                    dark:focus:ring-blue-500 
                    dark:focus:border-blue-500"
                    >
				<option selected>Estado</option>
				<option value="SP">São Paulo</option>
				<option value="RJ">Rio de Janeiro</option>
				<option value="PR">Paraná</option>
				<option value="MG">Minas Gerais</option>
			</select>

		</>
	)
}