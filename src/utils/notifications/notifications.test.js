import { render, screen } from '@testing-library/react'
import App from '../../App'
import { notifyError, notifySuccess, notifyWarning } from './notifications'

describe('when the toastify is triggered', () => {
  const successMessage = 'I am success message'
  const errorMessage = 'I am error message'
  const warningMessage = 'I am warning message'
  const listNotify = [
    'I am first notify',
    'I am second notify',
    'I am third notify',
  ]

  it('notify success triggered', async () => {
    render(<App />)
    notifySuccess(successMessage)
    expect(await screen.findByText(`Success: ${successMessage}`)).toBeInTheDocument()
  })

  it('notify error triggered', async () => {
    render(<App />)
    notifyError(errorMessage)
    expect(await screen.findByText(`Error: ${errorMessage}`)).toBeInTheDocument()
  })

  it('notify warning triggered', async () => {
    render(<App />)
    notifyWarning(warningMessage)
    expect(await screen.findByText(`Warning: ${warningMessage}`)).toBeInTheDocument()
  })

  it('triggered list notify', async () => {
    render(<App />)
    listNotify.forEach(message => notifyWarning(message))
    expect(await screen.findByText(`Warning: ${listNotify[0]}`)).toBeInTheDocument()
    expect(await screen.findByText(`Warning: ${listNotify[1]}`)).toBeInTheDocument()
    expect(await screen.findByText(`Warning: ${listNotify[2]}`)).toBeInTheDocument()
  })

  it('triggered different notify', async () => {
    render(<App />)
    notifySuccess(successMessage)
    notifyError(errorMessage)
    notifyWarning(warningMessage)
    expect(await screen.findByText(`Success: ${successMessage}`)).toBeInTheDocument()
    expect(await screen.findByText(`Error: ${errorMessage}`)).toBeInTheDocument()
    expect(await screen.findByText(`Warning: ${warningMessage}`)).toBeInTheDocument()
  })
})
