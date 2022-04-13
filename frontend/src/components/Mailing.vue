<template>
<div class="mailing-list-container">
  <div class="MailingTop">
    <div class="mailing-list">
        <input v-model="content" placeholder="Email" type="email" />
        <button class="mailButton" v-on:click="mailSubmit">Join!</button>
        </div>
        <div class="MailingContact"> <router-link to="/Contact"> Contact</router-link> </div> 
        </div>
         <div class="MailingBottom"> <div class="copyright"> &copy; {{ year }} DiscoverStream </div>
         </div> 
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
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  overflow: hidden;
}

.MailingTop {
  display: flex;
  position: relative;
  width: 100vw;
  justify-content: center;
  margin: 0;
}

.mailing-list {
  display: flex;
  position: relative;
  width: 50vw;
}

.mailButton {
  width: 20%;
  background: #d3ffeb;
  border-color: black;
  color: black;
  border: dotted 0.5px;
  font-weight: bold;
  text-transform: uppercase;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
}
.mailButton:hover {
  color: white;
  border: dashed 0.75px;
  font-style: oblique;
  background-color: transparent;
}

input {
  width: 90%;
  padding: 0.5rem 0.5rem;
  color: white;
  outline: none;
  border: 2px dotted rgba(128, 128, 128, 0.322);
  background: transparent;
}

input:focus {
  border: dashed 1px #d3ffeb;
  background: rgba(112, 112, 112, 0.342);
}

.MailingBottom {
  display: flex;
  width: 100vw;
  justify-content: center;
}

.copyright {
  display: flex;
  margin-top: 5px;
  width: 35vw;
  font-size: 15px;
  color: white;
  justify-content: center;
}

.MailingContact {
  display: flex;
  position: absolute;
  top: -10px;
  right: 80px;
  z-index: 999;
}

.MailingContact a {
 text-decoration: none;
  font-size: 3.5vw;
  font-family: "JBetude";
  color: MediumSeaGreen;
}

.MailingContact a:hover {
  color: ForestGreen;
}

@media only screen and (max-width: 750px) {
.MailingContact {
  top:0px;
  right: 40px;
}
}


</style>