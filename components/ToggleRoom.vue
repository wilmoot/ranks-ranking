<template>
    <section class="rooms">
        <button class="rooms__btn" :style="{background: roomId == 'FUTSAL_V3' ? '#0D5249' : '#136F63'}" @click="setRoomId('FUTSAL_V3')">FUTSAL 3v3</button>
        <button class="rooms__btn" :style="{background: roomId == 'FUTSAL_V4' ? '#0D5249' : '#136F63'}" @click="setRoomId('FUTSAL_V4')">FUTSAL 4v4</button>
        <button class="rooms__btn" :style="{background: roomId == 'POWER_V2' ? '#0D5249' : '#136F63'}" @click="setRoomId('POWER_V2')">POWER 2v2</button>
        <button class="rooms__btn" :style="{background: roomId == 'POWER_V3' ? '#0D5249' : '#136F63'}" @click="setRoomId('POWER_V3')">POWER 3v3</button>
        <button class="rooms__btn" :style="{background: roomId == 'VOLLEY' ? '#0D5249' : '#136F63'}" @click="setRoomId('VOLLEY')">VOLLEY</button>
    </section>
</template>

<script>

export default {
    name: "ToggleRoom",
    computed: {
      roomId() {
        return this.$store.state.roomId
      }
    },
    methods:{
        setRoomId(roomId){
            this.$store.commit('setRoomId', roomId)
        }
    }
}
</script>
