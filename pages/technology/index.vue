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
        <span class="Grew-up-overlay-text-U">
          <a class="Grew-up-color-text" href="/Home">HOME</a> / {{ text }}
        </span>
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-row justify="center">
      <span>Coming Soon</span>
      <!-- Sidebar -->
      </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    text: '', // ตัวแปรสำหรับข้อความ
  }),
  mounted() {
    // ดึงค่าจาก localStorage
    const storedText = localStorage.getItem('selectedSubMenu');
    this.text = storedText || 'Default text'; // ใช้ค่าที่เก็บไว้หรือข้อความเริ่มต้น
  },
};
</script>
