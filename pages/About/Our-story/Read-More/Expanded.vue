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
        <br><br><br>
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
            The accelerated implementation of Thailand government’s policy was
            benefiting the domestic motorcycle. Unfortunately, ‘Tom Yum Kung’
            crisis knocked the economy off the rails, and it has never fully
            recovered. The company then turned this crisis into a good
            opportunity to reengineer its internal operation processes to enter
            the global competition.
          </span>
          <br />
          <br />
          <span class="description-blod">In 1981</span>
          <span class="description-des">
            , the company once again relocated and moved to the present site. In
            the meantime, production facilities were enhanced with advanced
            manufacturing technology know-how to support increasing demand and
            to keep up with advancement in Thailand’s motorcycle industry.
          </span>
          <br />
          <br />
          <span class="description-des">
            The government’s policies to build a domestic motorcycle industry
            were continuously implemented. The local content requirements were
            raised to a minimum of 70% by value, and producers were required to
            use Thai-made exhausts and engines and imports of motorcycles were
            banned. With more than sufficient factory space, the company could
            manage to expand its production facilities to cover all related
            processes such as tooling, stamping, machining, welding and
            painting.
          </span>
          <br />
          <br />
          <span class="description-des">
            As well as the enhancement of production facilities, the work system
            was decentralized. The company put the stress on the importance and
            value of human resources by developing efficiency and quality among
            employees through numbers of onsite trainings and sending
            technicians abroad on study tours.
          </span>
          <br />
          <br />
          <span class="description-des">
            The company’s sales growth were consequently double digit every year
            for over ten years.
          </span>
          <br />
          <br />
          <span class="description-des">
            The company’s successful stories were shown in the below awards:
          </span>
          <ul>
            <li>
              <span class="Expandedp-marker description-blod">1990</span>
              <span class="description-des"
                >Thailand’s Quality Product Award – Automotive parts</span
              >
            </li>
            <li>
              <span class="Expandedp-marker description-blod">1991</span>
              <span class="description-des">Factory Award</span>
            </li>
            <li>
              <span class="Expandedp-marker description-blod">1991</span>
              <span class="description-des"
                >Outstanding Performance Award by Sharp Appliance (Thailand)
                Co.,Ltd.</span
              >
            </li>
            <li>
              <span class="Expandedp-marker description-blod">1996</span>
              <span class="description-des"
                >R&D Prize by Asian Honda Motor Co.,Ltd.</span
              >
            </li>
          </ul>
          <br />
          <br />
          <span class="description-blod"
            >Between June 1997 and January 1998</span
          >
          <span class="description-des">
            a financial crisis engulfed Thailand. This, though, had had the
            effect of making annual sales somewhat volatile as the motorcycle
            industry influenced by the state of the national economy. This was
            amplified by the fact that the main buyers in the domestic market
            are manual laborers and agricultural workers, and these groups had
            softer purchasing power.
          </span>
          <br />
          <br />
          <span class="description-des">
            The company’s sales were dramatically decreased by nearly 50% within two years.
          </span>
          <br />
          <br />
          <span class="description-des">
            However, the company turned this crisis into a good opportunity to
            reengineer its internal operation processes. As an OEM player, not
            only technology and know-how but quality, cost and delivery (QCD)
            were also key success factors. Japanese quality improvement systems
            such as 5S, Kaizen, and TQM were applied. The company had also
            introduced computer technology (ERP) for implement and improve
            production, production planning, material requirement planning and
            operation process so as to offer better services, on-time delivery
            and achieve lower costs. With more effective and efficient
            manufacturing, the company was then readily prepared to enter the
            global competition.
          </span>
          <v-row justify="center" align="center">
            <v-col cols="12" md="4">
              <img
                class="Founded-img-2pic"
                src="~/assets/uploads/6828/images/about/s14.png"
                alt=""
                style="width: 100%;"
              />
            </v-col>
            <v-col cols="12" md="4">
              <img
                class="Founded-img-2pic"
                src="~/assets/uploads/6828/images/about/s17.png"
                alt=""
               style="width: 100%;"
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

