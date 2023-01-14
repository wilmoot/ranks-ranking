export const state = () => ({
  roomId: "FUTSAL_V3, FUTSAL_V4",
});

export const mutations = {
  setRoomId(state, roomId) {
    state.roomId = roomId;
  },
};
