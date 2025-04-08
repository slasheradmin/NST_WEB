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
       'thumb_201905-22-023020_MEg9-0.jpg',
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
   