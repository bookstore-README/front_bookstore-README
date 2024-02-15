import { atom, useAtom } from 'jotai';
import { Address } from '@/types/address';
export const zipNoAtom = atom('');
export const roadAddrAtom = atom('');
export const jibunAddrAtom = atom('');

export const setAddressData = atom(null, (get, set, newValue: Address) => {
  set(zipNoAtom, newValue.zipNo);
  set(roadAddrAtom, newValue.roadAddr);
  set(jibunAddrAtom, newValue.jibunAddr);
});
