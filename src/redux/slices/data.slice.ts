import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type Car = {
  _id: number | null;
  mispar_rechev: number | null;
  tozeret_cd: string | null;
  sug_degem: string | null;
  tozeret_nm: string | null;
  degem_cd: string | null;
  degem_nm: string | null;
  ramat_gimur: string | null;
  ramat_eivzur_betihuty: string | null;
  kvutzat_zihum: string | null;
  shnat_yitzur: string | null;
  degem_manoa: string | null;
  mivchan_acharon_dt: string | null;
  tokef_dt: string | null;
  baalut: string | null;
  misgeret: string | null;
  tzeva_cd: string | null;
  tzeva_rechev: string | null;
  zmig_kidmi: string | null;
  zmig_ahori: string | null;
  sug_delek_nm: string | null;
  horaat_rishum: string | null;
  moed_aliya_lakvish: string | null;
  kinuy_mishari: string | null;
  rank: number | null;
};

const initialState: Car = {
  _id: null,
  mispar_rechev: null,
  tozeret_cd: null,
  sug_degem: null,
  tozeret_nm: null,
  degem_cd: null,
  degem_nm: null,
  ramat_gimur: null,
  ramat_eivzur_betihuty: null,
  kvutzat_zihum: null,
  shnat_yitzur: null,
  degem_manoa: null,
  mivchan_acharon_dt: null,
  tokef_dt: null,
  baalut: null,
  misgeret: null,
  tzeva_cd: null,
  tzeva_rechev: null,
  zmig_kidmi: null,
  zmig_ahori: null,
  sug_delek_nm: null,
  horaat_rishum: null,
  moed_aliya_lakvish: null,
  kinuy_mishari: null,
  rank: null,
};

const carDataSlice = createSlice({
  name: "carData",
  initialState,
  reducers: {
    setCarData(state, action: PayloadAction<Car>) {
      state._id = action.payload._id;
      state.mispar_rechev = action.payload.mispar_rechev;
      state.tozeret_cd = action.payload.tozeret_cd;
      state.sug_degem = action.payload.sug_degem;
      state.tozeret_nm = action.payload.tozeret_nm;
      state.degem_cd = action.payload.degem_cd;
      state.degem_nm = action.payload.degem_nm;
      state.ramat_gimur = action.payload.ramat_gimur;
      state.ramat_eivzur_betihuty = action.payload.ramat_eivzur_betihuty;
      state.kvutzat_zihum = action.payload.kvutzat_zihum;
      state.shnat_yitzur = action.payload.shnat_yitzur;
      state.degem_manoa = action.payload.degem_manoa;
      state.mivchan_acharon_dt = action.payload.mivchan_acharon_dt;
      state.tokef_dt = action.payload.tokef_dt;
      state.baalut = action.payload.baalut;
      state.misgeret = action.payload.misgeret;
      state.tzeva_cd = action.payload.tzeva_cd;
      state.tzeva_rechev = action.payload.tzeva_rechev;
      state.zmig_kidmi = action.payload.zmig_kidmi;
      state.zmig_ahori = action.payload.zmig_ahori;
      state.sug_delek_nm = action.payload.sug_delek_nm;
      state.horaat_rishum = action.payload.horaat_rishum;
      state.moed_aliya_lakvish = action.payload.moed_aliya_lakvish;
      state.kinuy_mishari = action.payload.kinuy_mishari;
      state.rank = action.payload.rank;
    },
    resetCarData(state) {
      state._id = null;
      state.mispar_rechev = null;
      state.tozeret_cd = null;
      state.sug_degem = null;
      state.tozeret_nm = null;
      state.degem_cd = null;
      state.degem_nm = null;
      state.ramat_gimur = null;
      state.ramat_eivzur_betihuty = null;
      state.kvutzat_zihum = null;
      state.shnat_yitzur = null;
      state.degem_manoa = null;
      state.mivchan_acharon_dt = null;
      state.tokef_dt = null;
      state.baalut = null;
      state.misgeret = null;
      state.tzeva_cd = null;
      state.tzeva_rechev = null;
      state.zmig_kidmi = null;
      state.zmig_ahori = null;
      state.sug_delek_nm = null;
      state.horaat_rishum = null;
      state.moed_aliya_lakvish = null;
      state.kinuy_mishari = null;
      state.rank = null;
    },
  },
});

export const { setCarData, resetCarData } = carDataSlice.actions;

export const currentCarData = (state: RootState) => state.carData;

export default carDataSlice.reducer;
