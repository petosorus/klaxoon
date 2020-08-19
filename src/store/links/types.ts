export const NEW_LINK = 'NEW_LINK'

interface NewLinkAction {
    type: typeof NEW_LINK
    payload: Link
}

export type LinkActionTypes = NewLinkAction

export interface Link {
    url: string
    title: string
    author: string
    date: string
    height: number
    width: number
}

export interface VimeoLink extends Link {
    duration: number
}

export interface LinkState {
    links: Link[]
}