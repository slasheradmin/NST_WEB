<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pa-0 Grew-up-position-container">
        <!-- Image -->
        <img
          src="~/assets/user_template/6828/slide/1558419547/201906-07-140725_B2-0.jpg"
          alt="Hero Image"
          class="Grew-up-hero-image"
        />
        <!-- H1 Text -->
        <span class="Grew-up-overlay-text Grew-up-color-text">{{
          pageTitle
        }}</span>
        <br><br><br>
        <span class="Grew-up-overlay-text-U">
          <a class="Grew-up-color-text" href="/Home">HOME</a> /{{ pageTitle }}
        </span>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10">
        <v-card class="card-padding px-5 py-5">
          <v-col class="text-start">
            <span class="Achievements-hader">
              NEW SOMTHAI MOTOR WORK CO.,LTD.
            </span>
            <br />
            <span class="description-des">
              73/1 M.4 Bangna-trad Road (Km.13.5) Bangchalong, Bangplee,
              Samutprakarn 10540 Thailand
            </span>
            <br />
            <span class="description-des"> T. +662 316 9324-31 </span>
            <br />
            <span class="description-des"> F. +662 316 8431-2 </span>
          </v-col>
          <v-col cols="12">
            <h2>{{ pageTitle }}</h2>
          </v-col>
          <v-col cols="12" class="text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.111124174905!2d100.72041409573342!3d13.628647128684516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5c2c70fbcb63%3A0xaf86ad1980d9982c!2z4Lia4LiI4LiBLiDguJnguLTguKfguKrguKHguYTguJfguKLguKHguK3guYDguJXguK3guKPguYzguYDguKfguK3guKPguYzguIQ!5e0!3m2!1sth!2sth!4v1736822206514!5m2!1sth!2sth"
              width="100%"
              height="400"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-col>
          <v-container class="custom-container">
            <v-row>
              <v-col>
                <h3>Contact Sales</h3>
              </v-col>
            </v-row>
          </v-container>
          <v-row justify="center" align="center">
            <v-col cols="12" md="4" justify="center" align="center">
              <v-card outlined style="max-width: 300px">
                <!-- Header Section -->
                <v-card-title class="card-header text-center">
                  <h3 class="header-text">Contact Sales</h3>
                </v-card-title>

                <!-- Description Section -->
                <v-card-text class="card-description">
                  <p class="description-text text-center">
                    <img
                      class="img-contact"
                      src="~/assets/uploads/6828/images/contact/phone-receiver.png"
                      alt=""
                    />
                    Tel +66898141774
                  </p>
                  <v-btn
                    color="success"
                    dark
                    class="fit-content-btn"
                    @click="clicktoline('0863743193')"
                  >
                    <p class="description-text text-center">
                      <img
                        class="img-contact"
                        src="~/assets/uploads/6828/images/contact/i_line_contact.png"
                        alt=""
                      />
                      &nbsp;ID :&nbsp;0863743193
                    </p>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-container class="custom-container">
            <v-row>
              <v-col>
                <h3>Become a Vender/Supplier</h3>
              </v-col>
            </v-row>
          </v-container>
          <v-row justify="center" align="center">
            <v-col cols="12" md="4" justify="center" align="center">
              <v-card outlined style="max-width: 300px">
                <!-- Header Section -->
                <v-card-title class="card-header text-center">
                  <h3 class="header-text">Become a Vendor/Supplier</h3>
                </v-card-title>

                <!-- Description Section -->
                <v-card-text class="card-description">
                  <p class="description-text text-center">
                    <img
                      class="img-contact"
                      src="~/assets/uploads/6828/images/contact/phone-receiver.png"
                      alt=""
                    />
                    Tel +66863743193
                  </p>
                  <v-btn
                    color="success"
                    dark
                    class="fit-content-btn"
                    @click="clicktoline('0898141774')"
                  >
                    <p class="description-text text-center">
                      <img
                        class="img-contact"
                        src="~/assets/uploads/6828/images/contact/i_line_contact.png"
                        alt=""
                      />
                      &nbsp;ID :&nbsp;0863743193
                    </p>
                  </v-btn>
                </v-card-text>
              </v-card>
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
      pageTitle: '',
      showQrCode: false, // ควบคุมการแสดง Dialog
    }
  },
  methods: {
    clicktoline(numbercontact) {
      var id = numbercontact
      var customURLScheme = 'line://ti/p/' + id
      window.location.href = customURLScheme
        window.open('https://line.me/R/ti/p/' + id, '_blank')
    },

    handleClick(route) {
      this.$router.push(route)
    },
  },
  mounted() {
    // ดึงค่าจาก localStorage และกำหนดค่าให้กับ pageTitle
    const selectedMenu = localStorage.getItem('selectedSubMenu')
    this.pageTitle = selectedMenu || 'Default Title' // ใช้ค่า Default Title หากไม่มีค่าใน localStorage
  },
}
</script>
<style scoped>
.img-contact {
  width: 23px;
}
.custom-container {
  padding: 10px 20px;
  background: #47b277;
  color: #ffffff;
  margin-bottom: 15px;
  margin-top: 15px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}
/* Header styles */
.card-header {
  background: #0f8a45; /* สีพื้นหลัง header */
  padding: 15px;
  display: flex; /* ใช้ Flexbox */
  justify-content: center; /* จัดให้อยู่ตรงกลางแนวนอน */
  align-items: center; /* จัดให้อยู่ตรงกลางแนวตั้ง */
}

.header-text {
  color: #ffffff; /* สีตัวหนังสือใน header */
  margin: 0;
  font-weight: bold;
  font-size: 18px;
}

/* Description styles */
.card-description {
  background: #696a6d; /* สีพื้นหลังคำอธิบาย */
  padding: 15px;
}

.description-text {
  color: #ffffff; /* สีตัวหนังสือในคำอธิบาย */
  margin: 0;
  font-size: 16px;
}
.fit-content-btn {
  margin-top: 15px;
}
</style>

  