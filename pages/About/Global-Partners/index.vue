<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pa-0 Grew-up-position-container">
        <!-- Image -->
        <img
          src="~/assets/user_template/6828/slide/1537959850/201904-22-153707_dI-0.jpg"
          alt="Hero Image"
          class="Grew-up-hero-image"
        />
        <!-- H1 Text -->
        <span class="Grew-up-overlay-text Grew-up-color-text">{{ text }}</span>
        <br><br><br>

        <span class="Grew-up-overlay-text-U"
          ><a class="Grew-up-color-text" href="/Home">HOME</a> /{{ text }}</span
        >
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="10" justify="center" align="center">
        <v-card class="card-padding px-5 py-5">
          <span class="Global-Partners-hader-bold">
            To accelerate the adoption of latest technologies to improve our
            advantages in the 3 key aspects of production:
          </span>
          <br />
          <br />
          <span class="Global-Partners-hader">
            Quality, Cost, and Turnaround time
          </span>
          <br />
          <br />
          <span class="Global-Partners-text">
            New Somthai has forged a robust strategic partnership with companies
            from Japan, Korea, and the United States. <br />
            The network provides us with essential technical know-hows, latest
            technology and equipment necessary for us to continue to maintain
            our leading position in the industry.
          </span>
<br><br>
          <!-- รูปภาพ 3 รูปในแถวเดียว พร้อมข้อความใต้ภาพ -->
          <v-row justify="center" spacing="4">
            <v-col cols="12" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/images/about/Screen Shot 2562-05-21 at 15_07_59.png"
                alt=""
                class="Global-Partners-image"
                style="width: 500px;"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      text: '', // ค่าเริ่มต้น
    }
  },
  mounted() {
    // ดึงค่าจาก localStorage
    const storedText = localStorage.getItem('selectedSubMenu')
    this.text = storedText || 'Default text' // ใช้ค่า storedText หรือข้อความเริ่มต้น
  },
}
</script>