<template>
  <v-container fluid>
    <!-- Header -->
    <v-row>
      <v-col cols="12" class="pa-0 Grew-up-position-container">
        <!-- Image -->
        <img
          src="~/assets/user_template/6828/slide/1558685615/201905-24-153445_jO-0.jpg"
          alt="Hero Image"
          class="Grew-up-hero-image"
        />
        <span class="Grew-up-overlay-text Grew-up-color-text">{{ text }}</span>
        <br><br><br>
        <span class="Grew-up-overlay-text-U"
          ><a class="Grew-up-color-text" href="/Home">HOME</a> /{{ text }}</span
        >
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-row justify="center">
      <!-- Sidebar -->
      <v-col cols="12" md="3">
        <div class="sidebar-header">PRODUCTS</div>
        <!-- Menu Items -->
        <div
          v-for="(item, index) in categories"
          :key="index"
          class="sidebar-item"
          @click="handleCategoryClick(item.route)"
        >
          {{ item.text }}
        </div>
      </v-col>

      <!-- Image Gallery -->
       <v-col cols="12" md="7">
        <v-card class="pa-4">
          <span class="">{{ text }}</span>
          <v-row>
            <v-col cols="4" v-for="(image, index) in images" :key="index">
              <v-img
                :src="require(`~/assets/uploads/6828/photos/201905/${image}`)"
                alt="Motorcycle Part"
                class="motorcycle-img-responsive"
                max-height="170"
                max-width="170"
                aspect-ratio="1"
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
  data: () => ({
    categories: [
      { text: 'MOTORCYCLE PARTS', route: '/motorcycle' },
      { text: 'AUTOMOTIVE PARTS', route: '/automotive' },
      { text: 'HOME APPLIANCES', route: '/home-appliance' },
      { text: 'HEAVY EQUIPMENT', route: '/Heavy' },
    ],
    images: [
      '201905-21-183803_9O8m-0.jpg',
      '201905-21-183801_2bPS-0.jpg',
      'thumb_201905-21-183759_zMGj-0.jpg',
      'thumb_201905-21-183758_Z91N-0.jpg',
      'thumb_201905-21-183756_27Hx-0.jpg',
      'thumb_201905-21-183755_7hg8-0.jpg',
      'thumb_201905-21-183753_YJxW-0.jpg',
      'thumb_201905-21-183751_4m8a-0.jpg',
      'thumb_201905-21-183750_qXb1-0.jpg',
      'thumb_201905-21-183749_Sl3n-0.jpg',
      'thumb_201905-21-183747_PEtX-0.jpg',
      'thumb_201905-21-183746_KKT0-0.jpg',
      'thumb_201905-21-183744_fTe5-0.jpg',
      // 'thumb_201906-09-135111_I9Gv-0.jpg',
      //'thumb_201906-09-135905_0CAO-0.jpg',
      // 'thumb_201906-09-135903_qDx5-0.jpg',
      'thumb_201905-21-181919_lNim-0.jpg',
      'thumb_201905-21-181917_JiDk-0.jpg',
      'thumb_201905-21-181916_oC8U-0.jpg',
      'thumb_201905-21-181915_ZWfo-0.jpg',
      'thumb_201905-21-181914_T8KH-0.jpg',
      'thumb_201905-21-181912_0i8Z-0.jpg',
      'thumb_201905-21-181909_MQ3Y-0.jpg',
      'thumb_201905-21-181908_XCFJ-0.jpg',
      'thumb_201905-21-181906_vUpH-0.jpg',
      // 'thumb_201906-09-134006_nehQ-0.jpg',
      // 'thumb_201906-09-134005_ppTS-0.jpg',
      // 'thumb_201906-09-134004_4pSd-0.jpg',
      'thumb_201905-21-181345_mdbX-0.jpg',
      'thumb_201905-21-181343_oP6e-0.jpg',
      'thumb_201905-21-181341_dNlP-0.jpg',
      'thumb_201905-21-181340_RIvO-0.jpg',
      'thumb_201905-21-181338_YFgs-0.jpg',
      'thumb_201905-21-181336_GCYZ-0.jpg',
      // 'thumb_201905-21-181335_YehW-0.jpg',
      'thumb_201905-21-181334_lHqM-0.jpg',
      'thumb_201905-21-181332_MvJ2-0.jpg',
      'thumb_201905-21-181331_gJKR-0.jpg',
      'thumb_201905-21-181330_KIGt-0.jpg',
      'thumb_201905-21-181329_f2NG-0.jpg',
      'thumb_201905-21-181327_HHQk-0.jpg',
      'thumb_201905-21-181326_Uxo3-0.jpg',
      'thumb_201905-21-181325_SjZr-0.jpg',
      'thumb_201905-21-181323_ZR7d-0.jpg',
    ],

    text: '', // เริ่มต้นตัวแปร text
  }),
  mounted() {
    // ดึงค่าจาก localStorage
   



    const storedText = localStorage.getItem('selectedSubMenu')
    this.text = storedText || 'Default text' // ใช้ค่า storedText หรือข้อความเริ่มต้น
  },
  methods: {
    handleCategoryClick(route) {
      // เก็บค่าหมวดหมู่ใน localStorage
      const selectedCategory = this.categories.find(
        (cat) => cat.route === route
      )
      if (selectedCategory) {
        localStorage.setItem('selectedSubMenu', selectedCategory.text)
      }
      // เปลี่ยนเส้นทางไปยัง route ที่กำหนด
      this.$router.push({ path: route })
    },
  },
}
</script>