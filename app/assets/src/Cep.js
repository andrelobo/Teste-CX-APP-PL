const Cep = {
    obterEndereco: async (cep) => {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET',
      })
  
      return response.json()
    },
  
    popularForm: async (residencia) => {
      return `
              <div>
                  Rua: ${residencia.rua}                
                  Bairro: ${residencia.bairro} 
                  Cidade: ${residencia.cidade} 
                  Estado: ${residencia.uf}
                  Ibge:   ${residencia.ibge}
              </div>
          `
    }
  }
  
  export default Cep
  