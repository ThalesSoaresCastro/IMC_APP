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

})