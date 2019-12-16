import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Players from './components/Players'
import DarkMode from './hooks/DarkMode';


afterEach(rtl.cleanup);


test('Render the app', () => {
  const wrapper = rtl.render(<Players/>)
  const element = wrapper.queryByText(/morgan/i)
  // expect(element).toBeVisible()
})


test('Check DarkMode', () => {
const wrapper = rtl.render(<App/>)
const element = wrapper.queryByText(/dark/i)
  expect(element).toBeVisible()

})


test('Check Lloyd', () => {
  const wrapper = rtl.render(<Players/>)
  const element = wrapper.queryByText(/lloyd/i)
})



test('Check numbers', () => {
  const wrapper = rtl.render(<Players/>)
  const element = wrapper.queryByText(/number 87/i)
})



