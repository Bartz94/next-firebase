import { UseToastOptions } from "@chakra-ui/react"

interface ToastProps {
    message: string
}

export const successToastConfig = (title: string, message: string) => {
    return {
        position: 'bottom-right',
        title: title,
        description: message,
        status: 'success',
        duration: 5000,
        isClosable: true,
    } as Omit<UseToastOptions, "id">
}
export const errorToastConfig = (title: string, message: string) => {
    return {
        position: 'bottom-right',
        title: title,
        description: message,
        status: 'error',
        duration: 5000,
        isClosable: true,
    } as Omit<UseToastOptions, "id">
}

export const loadingToastConfig = (title: React.ReactNode, message: React.ReactNode) => {
    return {
        position: 'bottom-right',
        title: title,
        description: message,
        status: 'loading',
        duration: 5000,
        isClosable: true,
    } as Omit<UseToastOptions, "id">
}