import { reactive, readonly } from 'vue';

interface MenuState {
  isOpen: boolean;
}

export interface MenuStore {
  state: MenuState;
  openMenu: (value: boolean) => void;
}

const state: MenuState = reactive({
  isOpen: false,
});

const openMenu = (value: boolean) => {
  if (value == undefined) {
    state.isOpen = !state.isOpen;
    return;
  }

  state.isOpen = value;
};

export const menuStore = readonly({
  state,
  openMenu,
});
