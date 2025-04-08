<template>
  <v-container fluid class="homepage">
    <v-row justify="center" align="center" style="margin-top: 1.8%">
      <v-col class="text-center" cols="12">
        <img
          src="../assets/user_template/6828/images/svg/logo_svg.svg"
          alt=""
          class="logo-intro"
        />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="7" class="text-center py-md-0">
        <v-responsive>
          <p class="custom-heading text-sm-body-2">
            With 50 year expertise and commitment to quality,
            <br />
            NST is customizing parts to satisfy customers&rsquo; needs
          </p>
          <p class="h2-intro text-sm-h6">
            ไม่ว่าจะเป็น อะไหล่แบบใด ทางเราสามารถช่วยเหลือคุณได้
          </p>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="7" class="text-center">
        <v-btn
          class="btn-intro"
          @click="goToPage"
          x-large
          color="error"
          dark
          rounded
        >
          <span class="font-size"> ENTER SITE</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import 'animate.css'

export default {
  layout: 'nologin',
  name: 'IndexPage',

  mounted() {
    document.documentElement.style.overflowY = 'hidden' // ซ่อน scrollbar
    document.body.style.overflowY = 'hidden'
  },
  beforeDestroy() {
    document.documentElement.style.overflowY = 'visible' // คืนค่าเดิมให้หน้าอื่น
    document.body.style.overflowY = 'visible'
  },

  methods: {
    goToPage() {
      this.$router.push('./Home')
    },
  },
}
</script>
  
<style scoped>
/* สำหรับจอเล็ก (ต่ำกว่า 690px) */
@media (max-width: 689px) {
  .custom-heading {
    font-size: 14px;
    line-height: 20px;
    font-family: 'Times New Roman', Times, serif;
  }

  .h2-intro {
    font-size: 16px;
    line-height: 22px;
  }

  .btn-intro {
    font-size: 14px;
    padding: 8px 16px;
  }

  /* ลดขนาดปุ่มเมื่อจอเล็กกว่า 600px (เหมาะสำหรับมือถือ) */
  @media (max-width: 600px) {
  .btn-intro {
    font-size: 12px !important;
    padding: 6px 12px; /* ปรับระยะห่างภายในปุ่ม */
    margin: 10px auto; /* ปรับระยะห่างภายนอกปุ่มและจัดกึ่งกลาง */
    display: block; /* ใช้ร่วมกับ margin auto เพื่อให้ปุ่มอยู่ตรงกลาง */
    width: fit-content; /* ป้องกันปุ่มขยายเต็มบรรทัด */
  }
}

}

/* สำหรับจอ 690px ขึ้นไป */
@media (min-width: 690px) {
  .custom-heading {
    font-size: 27px !important;
    line-height: 32px;
    font-family: 'Times New Roman', Times, serif !important;
  }

  .h2-intro {
    font-size: 15px !important;
    line-height: 36px;
    font-family: 'Times New Roman', Times, serif !important;
  }

  .btn-intro {
    font-size: 27px !important;
    padding: 10px 24px;
    font-family: 'Times New Roman', Times, serif !important;
  }
}

/* ป้องกัน Scrollbar */
.homepage {
  height: 100vh;
  overflow: hidden;
}

/* ซ่อน Scrollbar ใน Chrome, Safari */
::-webkit-scrollbar {
  display: none;
}

/* ซ่อน Scrollbar ใน Firefox */
html {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
  