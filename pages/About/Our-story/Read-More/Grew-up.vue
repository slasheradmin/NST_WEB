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
        <span class="Grew-up-overlay-text Grew-up-color-text">{{ title }}</span>
        <br> <br> <br>
        <span class="Grew-up-overlay-text-U"
          ><a class="Grew-up-color-text" href="/About/Our-story">Our-story</a>
          /{{ title }}</span
        >
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10">
        <v-card class="card-padding px-5 py-5">
          <span class="Grew-up-heard">{{ title }}</span>
          <span class="description-blod">
            Increasing importance of motorcycle in Thai daily life, together
            with a rebound of Thai economy were essential factors to the
            business during this period. The motorcycle industry became a
            sun-rise.
          </span>
          <br>
          <br>
          <span class="description-blod">In 1971</span>
          <span class="description-des">
            ,Thailand issued its first formal policy document covering the
            motorcycle sector, the most important specification of which was the
            setting of local content requirements (LCRs) and henceforth, at
            least 50% of the value of all the component parts of Thai-assembled
            motorcycles had to be sourced within the country. A strong domestic
            demand of motorcycles and these protection measures helped to
            intensively expand the company’s business.
          </span>
          <br>
          <br>
          <v-row justify="center" align="center">
            <v-col cols="12" md="4">
              <img
                class="Grew-up-Founded-img-s1"
                src="~/assets/uploads/6828/images/about/s5.png"
                alt=""
                style="width: 100%"
              />
            </v-col>
            <v-col cols="12" md="4">
              <img
                class="Grew-up-Founded-img-s1"
                src="~/assets/uploads/6828/images/about/s6.png"
                alt=""
                style="width: 100%"
              />
            </v-col>
            <v-col cols="12" md="4">
              <img
                class="Grew-up-Founded-img-s1"
                src="~/assets/uploads/6828/images/about/s13.png"
                alt=""
                style="width: 100%"
              />
            </v-col>
          </v-row>
          <br>
          <span class="description-blod">Jan 1974</span>
          <span class="description-des">
            –With limited working space, Mr. Somchai decided to move the factory
            to Sukhumvit area, which was ten times the size of old factory. He
            also registered the firm as a limited company under the name of “NEW
            SOMTHAI MOTOR WORK CO.,LTD.”
          </span>
          <br>
          <br>
          <v-row justify="center" align="center">
            <v-col cols="12" md="6">
              <img
                class="Grew-up-Founded-img-s2"
                src="~/assets/uploads/6828/images/about/s7.png"
                alt=""
                 style="width: 100%"
              />
            </v-col>
            <v-col cols="12" md="6">
              <img
                class="Grew-up-Founded-img-s2"
                src="~/assets/uploads/6828/images/about/s8(1).png"
                alt=""
                 style="width: 100%"
              />
            </v-col>
          </v-row>
          <span class="description-des">
            Towards a more active growth, more engineers and technicians were
            hired to work on research and development. A number of own technical
            knowhow projects were developed; namely: how to expand a pipe frame
            head without cracking, how to machine high precision collars, or how
            to weld fuel tanks seamlessly. New production lines were also added
            to cover a wide range of all metal motorcycle parts to serve
            customers’ needs. The company’s reputation was spread out to all
            Japanese motorcycle assemblies. The company thus became one of top
            five motorcycle part manufacturers in Thailand.
          </span>
          <br>
          <br>
          <span class="description-blod">Late 1978</span>
          <span class="description-des">
            , Mr. Somchai foresaw the increasing importance of automobile
            industry, together with the nearly fully utilization of existing
            production spaces and capacities. He decided to buy a 13-rai of land
            in Samutprakarn province, a suburban of Bangkok. With two years of
            construction, a new factory was ready to move in …
          </span>
          <br>
          <br>
          <v-row justify="center" align="center">
            <v-col cols="12" md="6">
              <img
                class="Grew-up-Founded-img-s1"
                src="~/assets/uploads/6828/images/about/s10.png"
                alt=""
                 style="width: 100%"
              />
            </v-col>
            <v-col cols="12" md="6">
              <img
                class="Grew-up-Founded-img-s1"
                src="~/assets/uploads/6828/images/about/s9.png"
                alt=""
                 style="width: 100%"
              />
            </v-col>
            <v-col cols="12" md="6">
              <img
                class="Grew-up-Founded-img-s1"
                src="~/assets/uploads/6828/images/about/s11.png"
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

<style scoped>
/* Container สำหรับจัดตำแหน่ง */

</style>
