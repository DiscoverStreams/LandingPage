<template>
  <div class="ContactContainer">
    <img class="img" src="@/assets/ProjectImages/Ausable_river.jpg" alt="City">  
    <div class="TitleContainer"> <h>{{Title}} </h> </div>
    <div class="DescriptionContainer"><h>{{Description}} </h> </div>
    <div class= "EmailContainer">
      <img src="@/assets/ContactImages/EmailIcon/EmailIcon.jpg">
      <h> <br> Email  <br> <br> </h>
      <h>{{Email}}</h> </div>
    <div class="PhoneContainer">
      <img src="@/assets/ContactImages/PhoneIcon/Phone.jpg">
      <h> <br> Phone Number <br> <br> </h>
      <h>{{Phone}}</h> </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    Title: String,
    Description: String,
    Email: String,
    Phone: String,
    BackgroundImage: String,
    EmailImage: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.ContactContainer{
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
}

.img{
  display: flex;
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
  filter: saturate(300%) grayscale(50%) brightness(50%);
}

.TitleContainer {
  position: absolute;
  top: 75px;
  width: 100%;
  margin: auto;
  font-size: 5vw;
  align-items: center;
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "TyposlabIrregular";
}

.DescriptionContainer {
  position: absolute;
  top: 225px;
  width: 75%;
  font-size: 2.5vw;
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "King";
}

.EmailContainer {
  position: absolute;
  top: 350px;
  left: 50px;
  width: 45vw;
  height: 45vh;
  font-size: 2vw;
  text-align: center;
  color: Black;
  font-family: "King";
  background-color: AliceBlue;
  filter: brightness(90%);;
}

.EmailContainer img {
  width: 8vw;
  height: 14vh;
}

.PhoneContainer {
  position: absolute;
  top: 350px;
  right: 50px;
  width: 45vw;
  height: 45vh;
  font-size: 2vw;
  text-align: center;
  color: Black;
  font-family: "King";
  background-color: AliceBlue;
  filter: brightness(90%);
}

.PhoneContainer img {
  width: 8vw;
  height: 14vh;
}


@media (max-height: 500px) {

.EmailContainer {
  top: 275px;
  font-size: 3vw;
  color: aliceblue;
  background-color: transparent;
}

.EmailContainer img {
  display: none;
}

.PhoneContainer {
  top: 275px;
  font-size: 3vw;
  color: aliceblue;
  background-color: transparent;
}

.PhoneContainer img {
  display: none;
}

}

</style>
