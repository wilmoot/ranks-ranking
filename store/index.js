export const state = () => ({
  roomId: 'FUTSAL_V3'
})

export const mutations = {
  setRoomId(state, roomId) {
    state.roomId = roomId;
  }
}
