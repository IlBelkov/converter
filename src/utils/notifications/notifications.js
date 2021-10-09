import { toast } from 'react-toastify'

export const notifySuccess = (message) => {
  toast.success(`Success: ${message}`, {
    position: toast.POSITION.TOP_CENTER
  })
}

export const notifyError = (message) => {
  toast.error(`Error: ${message}`, {
    autoClose: 10000,
    position: toast.POSITION.TOP_CENTER
  })
}

export const notifyWarning = (message, dely) => {
  toast.warning(`Warning: ${message}`, {
    autoClose: dely || 2000,
    position: toast.POSITION.TOP_LEFT
  })
}
