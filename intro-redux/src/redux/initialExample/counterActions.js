import * as counterTypes from './counterTypes'

export const increaseNumber = () => (
  {
    type: counterTypes.INCREASE,
    
  }
)

export const decreaseNumber = () => (
  {
    type: counterTypes.DECREASE,
  }
)

export const resetNumber = () => {
  return {
    type: counterTypes.RESET
  }
}