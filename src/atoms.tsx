import { atom, atomFamily, selectorFamily } from "recoil";

export const testItem = atom<any>({
  key: 'testItemState',
  default: 'te caias tu puta que te foian'
})

export const currentUserState  = atom({
  key: 'CurrentUserState',
  default: null,
  effects: [
    ({ onSet }) => {
      onSet(newId => {
        console.debug("Current user id: ", newId)
      })
    }
  ]
})

const localStorageEffect = (key: string) => ({ setSelf, onSet }: {setSelf: Function, onSet: Function}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue !== null) {
    setSelf(JSON.parse(savedValue))
  }

  onSet((newValue:any, __:any, isReset:any) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue))

  })
}

const currentUserIDState = atom({
  key: 'CurrentuserID',
  default: 1,
  effects: [
    localStorageEffect('current_user')
  ]
})

export const taskFamily = atomFamily({
  key: 'TaskFamily',
  default: id => ({
    id,
    title: 'New Task',
    status: 'none',
    x: 0,
    y: 0
  })
})