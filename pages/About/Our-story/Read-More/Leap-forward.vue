<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pa-0 Expandedp-position-container">
        <!-- Image -->
        <img
          src="~/assets/user_template/6828/slide/1537959850/201904-22-153707_dI-0.jpg"
          alt="Hero Image"
          class="Expandedp-hero-image"
        />
        <!-- H1 Text -->
        <span class="Expandedp-overlay-text Expandedp-color-text">{{
          title
        }}</span>
        <br /><br /><br />
        <span class="Expandedp-overlay-text-U"
          ><a class="Expandedp-color-text" href="/About/Our-story">Our-story</a>
          /{{ title }}</span
        >
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10">
        <v-card class="Expandedp-card-padding">
          <span class="Expandedp-heard">{{ title }}</span>
          <span class="Expandedp-description-blod">
            The world automotive and electrical industries are promising, and
            Thailand has been dubbed the ‘Detroit of Asia’. Strong global
            low-cost competitors like China and India become keen rivals for
            OEMs.
          </span>
          <br />
          <br />
          <span class="Expandedp-description-des">
            The company believed that the typical OEM model which focused on
            building a low-cost advantage was facing increasing challenge. The
            company attempted the development of its R&D capabilities and
            offered a mechanism for customers to capture more of process and
            design value added. Original design and manufacture (ODM) became the
            company’s strategic model to avoid its late mover disadvantage.
          </span>
          <br />
          <br />
          <span class="Expandedp-description-des">
            The company has signed technical assistance agreements with the
            world’s leading Japanese and Korean automobile parts manufacturers
            to boost up the manufacturing competitiveness through identification
            of improvement opportunities and streamlined processes.
          </span>
          <br />
          <br />
          <span class="description-des">A </span>
          <span class="description-blod"> ‘Wiper Arm Project’ </span>
          <span class="description-des">
            is one of success projects which the company was co-responsible for
            upstream with customers, starting from material selection, process,
            component design and quality and technical tests. The whole process
            is the company’s know-how. The company is the only manufacturer of
          </span>
          <span class="description-blod"> ‘BOSCH Wiper Arm’ </span>
          <span class="description-des">
            in Thailand. The company now exports its
          </span>
          <span class="description-blod"> ‘BOSCH Wiper Arm’ </span>
          <span class="description-des">
            to Africa, Brazil, Mexico, India, as well.
          </span>
          <br />
          <br />
          <span class="description-des">
            Lean manufacturing has been continuously implemented for eliminating
            the waste from manufacturing while maintaining high quality over 10
            years.
          </span>
          <br />
          <br />
          <span class="description-des">
            At the end of 2018, the company’s inventory turnover was
            considerably decreased from 30 days to 3 days in the ending of 2016.
            The ultimate goal is to zero inventory by applying KANBAN to an
            existing manufacturing operation.
          </span>
          <br />
          <br />
          <span class="description-des">
            The company’s annual sale growth has been higher than the industry’s
            growth average, and profits have been satisfactory.
          </span>
          <br />
          <br />
          <span class="description-des">
            By 2021, Thailand is expecting to be a global green automotive
            production based on advanced technology implementation. The company
            will expectedly be one of the major players of Thailand automotive
            industry.
          </span>
          <br />
          <br />
          <span class="description-des">
            For the next decade, the company will still be focusing on maintain
            the high standard of productivity, the on-time delivery and the
            excellent quality control. Furthermore, the company aims to produce
            more intense technological and innovation products.
          </span>
          <br />
          <br />
          <span class="description-des"> Awaiting the next chapter … </span>
          <br />
          <br />
          <v-row justify="center" align="center">
            <v-col md="6" sm="12">
              <img
                class="Expandedp-Founded-img-s18"
                src="~/assets/uploads/6828/images/about/p19.png"
                alt=""
                style="width: 100%"
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
      title: this.$route.query.title || 'Default title',
    }
  },
}
</script>
    <style>
.Expandedp-position-container {
  position: relative;
}

/* จัดการรูปภาพ */
.Expandedp-hero-image {
  width: 100%;
  height: 100%;
  display: block;
}

/* H1 บนรูป */
.Expandedp-overlay-text {
  position: absolute;
  top: 30%;
  left: 8%;
  color: white;
  font-size: 24px;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Roboto', sans-serif;
}

.Expandedp-overlay-text-U {
  position: absolute;
  top: 50%;
  left: 8%;
  color: white;
  font-size: 16px;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Roboto', sans-serif;
}

.Expandedp-heard {
  font-size: 48px !important;
  display: block;
  text-align: center;
  color: #282828;
  margin-bottom: 15px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

/* เพิ่มระยะห่างภายในของ v-card */
.Expandedp-card-padding {
  padding: 20px;
}

/* ปรับระยะห่างจากข้อความ */
.Expandedp-description-blod,
.Expandedp-description-des {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-left: 20px;
  color: #888686 !important;
}

.Expandedp-description-blod {
  color: #6a6969 !important;
  font-weight: bold;
  margin-top: 16px;
}

.Expandedp-color-text {
  color: #ffffff !important;
  text-decoration: none;
}

.Expandedp-color-text:hover {
  text-decoration: none;
}

.Expandedp-marker::before {
  content: '•';
  color: #6a6969;
  margin-right: 8px;
  font-size: 18px;
}

.Expandedp-Founded-img-s18 {
  width: 100%;
}
</style>
    