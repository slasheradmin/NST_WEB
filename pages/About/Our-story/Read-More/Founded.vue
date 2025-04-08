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
        <v-col cols="12" >
          <span class="Grew-up-overlay-text Grew-up-color-text">{{
            title
          }}</span>
        </v-col>
        <v-col cols="12">
          <span class="Grew-up-overlay-text-U"
            ><a class="Grew-up-color-text" href="/About/Our-story">Our-story</a>
            /{{ title }}</span
          >
        </v-col>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10">
        <v-card class="card-padding px-5 py-5">
          <span class="Grew-up-heard">{{ title }}</span>
          <span class="description-blod">
            The first 10 years of New Somthai Motor Work Co.,Ltd was rapidly
            expanded with the strong supports from the influx of Japanese
            motorcycle manufacturers in Thailand. The company was driven by the
            founder’s entrepreneurial spirit.
          </span>
          <br />
          <br />
          <span class="description-blod">Mar 1965</span>
          <span class="description-des">
            – Mr. Somchai Prasertthavorn had set up a small factory under the
            business name “SomthaiKarnchang”, a one-unit shophouse located on
            Bangna Trad Road, Bangkok, mainly producing bearings and other metal
            accessories for American parachute during the Vietnam War. Despite
            no financial support and technical education background, he managed
            the business by his own. There was only one employee in the business
            – his wife, Thipawan Prasertthavorn. Against the slow growth of the
            business during the first five years, the business was steady and
            stable. His profound experiences later became the business’s
            strength and footprint for new businesses.
          </span>
          <br />
          <br />
          <v-row justify="center" align="center">
            <v-col cols="12" md="6">
              <img
                class="Founded-img-2pic"
                src="~/assets/uploads/6828/images/about/s1(1).png"
                alt=""
                style="width: 100%"
              />
            </v-col>
            <v-col cols="12" md="6">
              <img
                class="Founded-img-2pic"
                src="~/assets/uploads/6828/images/about/s2.png"
                alt=""
                style="width: 100%"
              />
            </v-col>
          </v-row>
          <br />
          <br />
          <span class="description-blod">Late 1969</span>
          <span class="description-des">
            , as all four world renowned Japanese motorcycle manufactures eyed
            on Thailand as a new hub of their assemblies, there was a great
            demand for technical and high experience local suppliers. The
            company was promptly selected. The business expanded rapidly from
            one-unit shophouse to four-unit shophouses, from two employees to
            fifty employees and from one lathing machine to many kinds of
            machines.The business was now ready to move forward …
          </span>
          <v-row justify="center" align="center">
            <v-col cols="12" md="6">
              <img
                class="Founded-img-2pic"
                src="~/assets/uploads/6828/images/about/s3.png"
                alt=""
                style="width: 100%"
              />
            </v-col>
            <v-col cols="12" md="6">
              <img
                class="Founded-img-2pic"
                src="~/assets/uploads/6828/images/about/s4.png"
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
      // title: localStorage.getItem('title') || 'Default Title',
    }
  },
}
</script>


