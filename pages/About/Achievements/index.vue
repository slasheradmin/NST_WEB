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
          <span class="Achievements-hader">
            Continuous research and development <br />
            over the past 60 years
          </span>
          <br />
          <span class="Achievements-hader-bold">
            has resulted in New Somthai Motor Work receiving many awards for
            excellence, <br />quality standard certiﬁcations, and awards for
            innovation.
          </span>
          <br />
          <span class="Achievements-hader-normal">
            Notable awards & certiﬁcations include:
          </span>

          <!-- รูปภาพ 3 รูปในแถวเดียว พร้อมข้อความใต้ภาพ -->
          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w1.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Excellent Factory in section of Motor Parts</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w2.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Certified ISO 9001:2015
                Stamping, Machining, Welding, Painting, and Assembly of Metal Parts</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w28.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">IATF 16949:2016
                Stamping, Machining, Welding, Painting and Assembly of Metal Parts</span>
            </v-col>
          </v-row>

          <!-- หากต้องการแสดงแถวใหม่ -->
          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w3.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">TUV Certificate applied a quality system for Manufacturing of Shift Levers</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w4.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Certificate of approval from BVQI</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w5.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Certificate from Federal Ministry for the Environment
                (Loss Reduction Process)</span>
            </v-col>
          </v-row>
          
          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w6.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Celebration of 45 years of excellent from KCW</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w7.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Quality improvement activities from Kawasaki</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w8.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">R&D Prize from Asia Honda Motor</span>
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w9.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Cost Reduction Achievement Award by Thai Suzuki Motor Co., Ltd.</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w10.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">The Best of Cost Down Award Year 2019</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w11.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Thank you from the Suzuki motocycle menufacturer for a long time Year 2017</span>
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w12.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Thank you from the Suzuki family Year 1980</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w13.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Thank you from the Suzuki family Year 2523</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w14.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">SUPPORT & CO-OPRERATION Year 2007 from NBMT</span>
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w15.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Quality improvement activities stage2 from Kawasaki</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w16.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Quality Award Year 2017 from Honda</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w17.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">PDS VENDER AWARD  Year 2017 from DAIKIN</span>
            </v-col>
          </v-row>
          
          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w18.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">KAIZEN Activities, KPS Year 2006 from Kawasaki</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w19.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">KAIZEN Activity Year 2010 from Kawasaki</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">  
              <img src="~/assets/uploads/6828/images/achievements/w20.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">IMPROVEMENT $ DEVELOPMENT Year 2003 from Suzuki</span>
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w21.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">IMPROVEMENT & DEVELOPMENT Year 2005 from Suzuk</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w22.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Good co-operation Year 2010 from Kawasaki</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w23.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Good Co-operation Year 2006 from Suzuki</span>
            </v-col>
          </v-row>

          <v-row justify="center" spacing="4">
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w24.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Cost down award Year 2018 from Suzuki</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w25.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">Cost Effort Year 2014 from Koyo</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w26.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">50th ANNIVERSARY from Suzuki</span>
            </v-col>
          </v-row>
          
          <v-row justify="start" spacing="4">
            <v-col cols="12" md="12" class="d-flex flex-column align-center"> 
              <img src="~/assets/uploads/6828/images/achievements/w27.jpg" alt="" class="achievement-image" />
              <span class="achievement-text">CosFactory award from Suzuki</span>
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

