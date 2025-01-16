import { StateCreator } from "zustand";
import { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
}



// La sintaxis [],[] quiere decir que no se requieren parámatros adicionales
export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [],[], NotificationSliceType> = (set) => ({
    notification: {
        text: "",
        error: false,
        show: false,
    },
    showNotification: (payload) =>{
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show:true
            }
        })
    }
})