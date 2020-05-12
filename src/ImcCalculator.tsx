const imc = () => {
    const imc_comum=(altura: number, peso: number)=>{
        if( altura <= 0 || peso <= 0){
            return 'Os valores devem ser maiores que zero';
        }
        else{
            const value = peso/(altura*altura)
            if(value < 18.5){
                return 'Abaixo do Peso';
            }
            else if( value>=18.5 && value <=24.9 ){
                return 'Peso Normal';
            }
            else if( value>25 && value <=29.9 ){
                return 'Sobrepeso';
            }
            else if( value>=30 && value <=34.9 ){
                return 'Obesidade grau 1';
            }
            else if( value>=35 && value <=39.9 ){
                return 'Obesidade grau 2';
            }
            else{
                return 'Obesidade grau 3';
            }
        }
    }


    /**
     *
     * De acordo com o site governamental, o cálculo do imc de crianças e adolescentes
     * depende do sexo e da idade da criança, sendo necessário a consulta direta com
     * um especialista para crianças com idades a baixo de 10 anos, pois o cálculo se
     * torna mais complexo, precisando de um profissional experiente para a estimativa.
     *
     * https://www.saude.gov.br/component/content/article/804-imc/40510-imc-em-criancas-e-adolescentes%20Acesso%20em%2024-10-2019
     *
     *
     * **/

    const imc_adolescente = (altura: number, peso: number,
                              idade: number, sexo: string)=>{

      if(altura <=0 || peso <=0 || idade <=0){
        return 'Os valores digitados são inválidos. Altura, peso e idade devem ser maior que zero.'

      }
      else if(0 <= idade && idade < 10){
        return 'A avaliação do peso em crianças menores de 10 anos é mais complexa, pois utiliza indicadores diferentes para subgrupos diferentes (0 a 2 anos, 2 a 5 anos e 5 a 10 anos). Para mais informações, busque a orientação de um profissional de saúde.'

      }

      else{
        let result = ['Baixo Peso', 'Adequado', 'Sobrepeso']

        const function_auxiliar = (imc:number, max_value: number,
                                      min_value: number)=>{
                                        if(imc <= min_value){
                                          return result[0]
                                        }
                                        else if(imc >= max_value ){
                                          return result[2]
                                        }
                                        else{
                                          return result[1]
                                        }
                                  }

        const imc_table_values_fem = [
          {'idade' : 10, 'min' : 14.22, 'max': 20.19},
          {'idade' : 11, 'min' : 14.59, 'max': 21.18},
          {'idade' : 12, 'min' : 14.97, 'max': 22.17},
          {'idade' : 13, 'min' : 15.35, 'max': 23.08},
          {'idade' : 14, 'min' : 15.66, 'max': 23.88},
          {'idade' : 15, 'min' : 16, 'max': 24.29},
          {'idade' : 16, 'min' : 16.36, 'max': 24.74},
          {'idade' : 17, 'min' : 16.58, 'max': 25.23},
          {'idade' : 18, 'min' : 16.7, 'max': 25.56},
          {'idade' : 19, 'min' : 16.86, 'max': 25.85},
        ]

        const imc_table_values_masc = [
          {'idade' : 10, 'min' : 14.41, 'max': 19.6},
          {'idade' : 11, 'min' : 14.82, 'max': 20.35},
          {'idade' : 12, 'min' : 15.23, 'max': 21.12},
          {'idade' : 13, 'min' : 15.72, 'max': 21.93},
          {'idade' : 14, 'min' : 16.17, 'max': 22.77},
          {'idade' : 15, 'min' : 16.58, 'max': 23.63},
          {'idade' : 16, 'min' : 17, 'max': 24.45},
          {'idade' : 17, 'min' : 17.3, 'max': 25.28},
          {'idade' : 18, 'min' : 17.53, 'max': 25.95},
          {'idade' : 19, 'min' : 17.79, 'max': 26.36},
        ]

        let imc_value = peso/(altura*altura)

        let value_obj = sexo == 'M'?
                        imc_table_values_masc.filter(p => {return p.idade == idade}) :
                        imc_table_values_fem.filter(p => {return p.idade == idade})


        return function_auxiliar(imc_value, value_obj[0].max, value_obj[0].min)
      }
    }


    const imc_idoso = ()=>{

    }

    return {
        imc_comum,
        imc_adolescente,
        imc_idoso,
    };
};

export default{
    imc,
}
