import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { DetailsSetType } from '../../../components/shared/UserForm/FieldSets/DetailsSet/DetailsSet';
import { AdvantagesSetType } from '../../../components/shared/UserForm/FieldSets/AdvantagesSet/AdvantagesSet';
import { AboutSetType } from '../../../components/shared/UserForm/FieldSets/AboutSet/AboutSet';

interface UserFormState {
  detailsSet: DetailsSetType;
  advantagesSet: AdvantagesSetType;
  aboutSet: AboutSetType;
}

const initialState: UserFormState = {
  detailsSet: {
    nickname: '',
    name: '',
    sername: '',
    sex: null,
  },
  advantagesSet: {
    advantages: [
      {
        advantage: '',
      },
      {
        advantage: '',
      },
      {
        advantage: '',
      },
    ],
    checkbox: [],
    radio: '',
  },
  aboutSet: {
    about: '',
  },
};

export const userFormSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    changeDetails: (state, actions) => {
      state.detailsSet = actions.payload;
    },
    changeAdvantages: (state, actions) => {
      state.advantagesSet = actions.payload;
    },
    changeAbout: (state, actions) => {
      state.aboutSet = actions.payload;
    },
    clearState: () => initialState,
  },
});

export const { changeDetails, changeAdvantages, changeAbout, clearState } =
  userFormSlice.actions;
export const userFormSelector = (state: RootState) => state.userFormReducer;
export default userFormSlice.reducer;
