<template>
<div class="mailing-list-container">
    <div class="mailing-list">
        <input v-model="content" placeholder="Email" type="email" />
        <button class="mailButton" v-on:click="mailSubmit">Join!</button>
        </div> <div class="copyright"> &copy; {{ year }} DiscoverStream </div>
        </div>
</template>

<script>
export default {
  name: "Mailing",
  data: () => ({
    year: new Date().getFullYear(),
    content: '',
  }),
}
</script>

<style scoped>

.mailing-list-container {
  background-color: black;
  padding-bottom: 25px;
  display: flex;
  position: relative;
  justify-content: center;
}

.mailing-list {
  display: flex;
  width: 50%;
  max-width: 50rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.mailButton {
  width: 10%;
  min-width: 6rem;
  background: #d3ffeb;
  border-color: black;
  color: black;
  border: dotted 0.5px;
  font-weight: bold;
  outline: none;
  text-transform: uppercase;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
}
.mailButton:hover {
  color: white;
  border: dashed 0.75px;
  font-style: oblique;
  background-color: transparent;
  border-radius: 0%;
}

input {
  width: 90%;
  padding: 0.5rem 0.5rem;
  color: white;
  outline: none;
  border: 2px dotted rgba(128, 128, 128, 0.322);
  background: transparent;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
input:focus {
  border: dashed 2px #d3ffeb;
  background: rgba(112, 112, 112, 0.342);
}

.copyright {
    color: white;
}

</style>