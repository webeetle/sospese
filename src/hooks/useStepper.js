import { useState } from 'react'

const useStepper = (initialState = {
  initial: 0,
  maxStep: 0
}) => {
  const [stepper, setStep] = useState(initialState)
  return {
    step: stepper.step ? stepper.step : stepper.initial,
    maxStep: stepper.maxStep,
    set: setStep,
    reset: () => setStep(initialState.initial),
    next: () => setStep(prev => {
      const step = prev.step ? prev.step + 1 : prev.initial + 1
      return {
        ...prev,
        step
      }
    }),
    prev: () => setStep(prev => {
      const step = prev.step ? prev.step - 1 : prev.initial - 1
      return {
        ...prev,
        step
      }
    })
  }
}

export default useStepper
