// fichier qui ajoute nos types définie au types existants déjà.

import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import {AppDispatch, RootState } from '../store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 