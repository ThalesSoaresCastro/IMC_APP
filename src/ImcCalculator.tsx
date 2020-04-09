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
    
    return {
        imc_comum,
    };
};

export default{
    imc,
}