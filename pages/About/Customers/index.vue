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
          <span class="Customers-hader">
            65 % of New Somthai customers are from the motorcycle industry
            <br />
            and 35% are from the automobile industry.
          </span>
          <br />
          <span class="Customers-hader-bold">
            We supply parts to motorcycle assembly plants operated by the 4
            major players which include: Honda, Kawasaki, Suzuki, and Yamaha.
          </span>
          <br />
          <br />
          <span class="Customers-hader-normal">
            For automotive industry, we manufacture parts for First-Tier
            suppliers as well as automobile manufacturers. Starting in 2010, we
            have expanded our product portfolio to include products in the
            precision and safety categories, such as golf club’s heads and
            windshield wipers.
          </span>
          <br />

          <!-- รูปภาพ 3 รูปในแถวเดียว พร้อมข้อความใต้ภาพ -->
          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201907/thumb_201907-03-153825_wwZH-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201905/thumb_201905-23-140000_oNkQ-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-09-223202_chQB-0.jpg"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201905/thumb_201905-23-140001_O1It-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-09-223202_rZ16-0.jpg"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201905/thumb_201905-23-140001_CWSu-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_8qAK-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201905/thumb_201905-23-140000_e0Th-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-09-223202_8MfO-0.jpg"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201905/thumb_201905-23-140001_v8BP-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201905/thumb_201905-23-140001_KWoH-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_l7pD-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_6NAa-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_W7Ik-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_3lIs-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_o01H-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_MEPy-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_wW35-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_RxY4-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_c0kJ-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201907/thumb_201907-09-163955_ZAG8-0.jpg"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/201906-07-145654_FVC6-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_ksY6-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145654_G1T2-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145653_GJAw-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145653_ebR8-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145653_MxQP-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145653_hOWF-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145653_GCuR-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201907/thumb_201907-09-175535_VFA6-0.jpg"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201906/thumb_201906-07-145653_VNiO-0.png"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201907/thumb_201907-09-163956_hTCt-0.jpg"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201907/thumb_201907-09-163956_jTde-0.jpg"
                alt=""
                class="Customers-image"
              />
            </v-col>
          </v-row>

          <v-row justify="start" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201907/thumb_201907-09-163956_9YnV-0.jpg"
                alt=""
                class="Customers-image"
              />
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
              <img
                src="~/assets/uploads/6828/photos/201907/thumb_201907-09-163956_PX8v-0.jpg"
                alt=""
                class="Customers-image"
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
