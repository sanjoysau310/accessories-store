import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../services/firebase';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setUser, setLoading, setError } = userSlice.actions;

export const signup = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    dispatch(setUser(userCredential.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    dispatch(setUser(userCredential.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch(setUser(null));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default userSlice.reducer;