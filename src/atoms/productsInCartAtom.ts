import { IProduct } from "@/components/CardsList";
import { atom } from "jotai";

export const productsInCartAtom = atom<IProduct[]>([])