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
      <v-col cols="10">
        <v-card class="card-padding px-5 py-5">
          <v-col class="text-center">
            <span class="description-blod">
              New Somthai Motor Work Committed to Sustainability through ESG
            </span>
          </v-col>
          <span class="description-des"> At </span>
          <span class="description-blod"> New Somthai Motor Work,</span>
          <span class="description-des">
            we believe success is not only about making a profit but also about
            caring for the environment, helping people, and doing the right
            thing. That's why we are dedicated to ESG—Environmental, Social, and
            Governance.
          </span>
          <br />
          <br />
          <span class="description-blod"> Caring for the Environment</span>
          <br />
          <span class="description-des">
            We work hard to reduce our impact on nature by using eco-friendly
            technology and saving energy. Our goal is to protect natural
            resources and make the planet healthier for everyone.</span
          >
          <br />
          <br />
          <span class="description-blod"> Supporting People</span>
          <br />
          <span class="description-des">
            We care about our employees, our communities, and society. We
            provide training to help our staff grow, support education, and run
            programs to improve the lives of people in our communities.</span
          >
          <br />
          <br />
          <span class="description-blod"> Doing the Right Thing</span>
          <br />
          <span class="description-des">
            Honesty and fairness guide everything we do. We make sure our
            decisions are transparent and fair so that everyone who works with
            us can trust us.</span
          >
          <br />
          <br />
          <span class="description-blod"> Looking Toward a Better Future</span>
          <br />
          <span class="description-des">
            For us, ESG is not just good for business—it’s the right thing to
            do. By acting responsibly today, we are helping to build a brighter,
            safer future for everyone. We welcome you to join us on this journey
            toward a better, more sustainable world. Together, we can make a
            real difference.
          </span>
          <br> <br>
          <v-col class="text-center">
            <span class="Achievements-hader">
              New Somthai Motor Work
          </span>
          <br>
          <span class="Global-Partners-text">
            Building a Better Future, Together

          </span>
          </v-col>
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
