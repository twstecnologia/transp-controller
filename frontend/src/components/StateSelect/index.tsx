export default function StateSelect() {
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
				<option value="AC">Acre</option>
				<option value="AL">Alagoas</option>
				<option value="AP">Amapá</option>
				<option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
				<option value="CE">Ceará</option>
				<option value="ES">Espírito Santo</option>
				<option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
				<option value="MT">Mato Grosoo</option>
				<option value="MS">Mato Grosso do Sul</option>
				<option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
				<option value="PB">Paraíba</option>
				<option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
				<option value="PI">Piauí</option>
				<option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
				<option value="RS">Rio Grande do Sul</option>
				<option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
				<option value="SP">São Paulo</option>
				<option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
			</select>

		</>
	)
}