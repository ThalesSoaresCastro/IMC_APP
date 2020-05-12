/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import ImcCalculator from '../src/ImcCalculator';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
/*
it('renders correctly', () => {
  renderer.create(<App />);
});
*/

describe('IMC', ()=>{
  /*
    Casos de teste:
      imc_comum sendo calculado com valor negativo.
      imc_comum entre os valores pedidos.

      imc_adolescente recebendo valores incorretos para o cálculo.
      imc_adolescente recebendo os valores para cálculo pra sexo masculino e femninino,
      além dos atributos de idade.
  */
 it('Cálculo de IMC Comum', ()=>{
      const imc_cal = ImcCalculator.imc();

      expect(imc_cal.imc_comum(-1, 2)).toEqual('Os valores devem ser maiores que zero');
      expect(imc_cal.imc_comum(1.8, 58)).toEqual('Abaixo do Peso');
      expect(imc_cal.imc_comum(1.7, 70)).toEqual('Peso Normal');
      expect(imc_cal.imc_comum(1.7, 80)).toEqual('Sobrepeso');
      expect(imc_cal.imc_comum(1.7, 100)).toEqual('Obesidade grau 1');
      expect(imc_cal.imc_comum(1.6, 100)).toEqual('Obesidade grau 2');
      expect(imc_cal.imc_comum(1.6, 110)).toEqual('Obesidade grau 3');
  })


  it('Cálculo IMC Adolescente',()=>{
      const imc_adol = ImcCalculator.imc();
      expect(imc_adol.imc_adolescente(-1,2,-2,'M')).toEqual('Os valores digitados são inválidos. Altura, peso e idade devem ser maior que zero.')
      expect(imc_adol.imc_adolescente(1.68,75,5,'F')).toEqual('A avaliação do peso em crianças menores de 10 anos é mais complexa, pois utiliza indicadores diferentes para subgrupos diferentes (0 a 2 anos, 2 a 5 anos e 5 a 10 anos). Para mais informações, busque a orientação de um profissional de saúde.')

      //feminino
      expect(imc_adol.imc_adolescente(1.68,75,14,'F')).toEqual('Sobrepeso')
      expect(imc_adol.imc_adolescente(1.68,45,11,'F')).toEqual('Adequado')
      expect(imc_adol.imc_adolescente(1.6,42,17,'F')).toEqual('Baixo Peso')

      //masculino
      expect(imc_adol.imc_adolescente(1.7,78,15,'M')).toEqual('Sobrepeso')
      expect(imc_adol.imc_adolescente(1.78,70,19,'M')).toEqual('Adequado')
      expect(imc_adol.imc_adolescente(1.86,60,18,'M')).toEqual('Baixo Peso')
  })


  it('Cálculo IMC Terceira idade', ()=>{
    const imc_idoso = ImcCalculator.imc();

    //Valores incorretos
    expect(imc_idoso.imc_terceiraIdade(-1.6, 60)).toEqual('Valores deve ser maiores que zero')
    expect(imc_idoso.imc_terceiraIdade(1.68, -52)).toEqual('Valores deve ser maiores que zero')
    expect(imc_idoso.imc_terceiraIdade(-1.52, -75)).toEqual('Valores deve ser maiores que zero')

    //teste para valores sem a circunferência(opcional)
    //IMC normal || IMC à baixo do normal || IMC acima do normal
    expect(imc_idoso.imc_terceiraIdade(1.6, 60)).toEqual(['Peso adequado', 'No caso dos idosos, além do IMC, é importante avaliar o perímetro ou circunferência da panturrilha, assim como se faz com a cintura quando medimos a circunferência da cintura. O perímetro da panturrilha é mais sensível para a avaliação da massa muscular, cuja redução implica a diminuição da força muscular. Nos idosos, o perímetro superior a 31 cm indica um quadro de normalidade, enquanto uma medida igual ou inferior a esse valor é indicativa de desnutrição.'])
    expect(imc_idoso.imc_terceiraIdade(1.68, 52)).toEqual(['Baixo peso', 'No caso dos idosos, além do IMC, é importante avaliar o perímetro ou circunferência da panturrilha, assim como se faz com a cintura quando medimos a circunferência da cintura. O perímetro da panturrilha é mais sensível para a avaliação da massa muscular, cuja redução implica a diminuição da força muscular. Nos idosos, o perímetro superior a 31 cm indica um quadro de normalidade, enquanto uma medida igual ou inferior a esse valor é indicativa de desnutrição.'])
    expect(imc_idoso.imc_terceiraIdade(1.52, 75)).toEqual(['Sobrepeso', 'No caso dos idosos, além do IMC, é importante avaliar o perímetro ou circunferência da panturrilha, assim como se faz com a cintura quando medimos a circunferência da cintura. O perímetro da panturrilha é mais sensível para a avaliação da massa muscular, cuja redução implica a diminuição da força muscular. Nos idosos, o perímetro superior a 31 cm indica um quadro de normalidade, enquanto uma medida igual ou inferior a esse valor é indicativa de desnutrição.'])



    //teste para valores com a circunferência(opcional)
    //IMC normal || IMC à baixo do normal || IMC acima do normal
    expect(imc_idoso.imc_terceiraIdade(1.62, 61, 34)).toEqual(['Peso adequado','Quadro de normalidade' ])
    expect(imc_idoso.imc_terceiraIdade(1.72, 50, 25)).toEqual(['Baixo peso', 'Desnutrição'])
    expect(imc_idoso.imc_terceiraIdade(1.54, 80, 42)).toEqual(['Sobrepeso', 'Quadro de normalidade'])



  })


})
