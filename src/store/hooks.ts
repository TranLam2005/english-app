'use client';
import type {TypedUseSelectorHook} from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./persistReducer";
import type { RootState } from "./persistReducer";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();