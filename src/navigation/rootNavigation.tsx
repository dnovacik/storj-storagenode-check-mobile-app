import React, { createRef } from 'react'
import { NavigationContainerRef } from '@react-navigation/native'

let isMounted: boolean = false

export function mount() {
    isMounted = true
}

export const navigationRef = createRef<NavigationContainerRef>()

type navigationProps = {
    name: string
    params?: {}
}

export function navigate({ name, params }: navigationProps): void {
    if (isMounted && navigationRef.current) {
        navigationRef.current.navigate(name, params)
    }
}
