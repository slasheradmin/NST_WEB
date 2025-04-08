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
            As Thai motorcycle sector is largely dependent on the domestic
            market and this was subject to instabilities. The company decided to
            put less emphasis on domestic motorcycle market, but more focus on
            industry diversification.The new business strategies and continuous
            business improvement were also remarkable as key factors to achieve.
          </span>
          <br />
          <br />
          <span class="description-des">
            The company’s business strategies had been changed to aim more on
            exporting markets and industry diversification such as household
            electrical appliances, agricultural equipment parts and automobile
            parts. In order to maintain the development of the business and to
            meet the international manufacturing standards, the company
            considered to set out on the journey to certification. The internal
            business processes needed to be formalized, to provide improved
            internal communications and to help focusing on the important areas
            of the business. The aim was for management processes to be
            established throughout the business, providing a solid foundation
            and leading to increase productivity and profit through improved
            efficiency and communications. The company had achieved ISO9001,
            ISO9002, ISO14001 and TS16949 within two years
          </span>
          <br />
          <br />
          <span class="description-des">
            The company has signed technical assistance agreements with the
            world’s leading Japanese and Korean automobile parts manufacturers
            to boost up the manufacturing competitiveness through identification
            of improvement opportunities and streamlined processes.
          </span>
          <br />
          <br />
          <ul>
            <li>
              <span class="Expandedp-marker description-des"
                >Apr 1999 TOYO DENSO CO.,LTD. for ‘Switch Inhibitor’ of ‘HONDA’
                Select Lever Assembly Product</span
              >
            </li>
            <li>
              <span class="Expandedp-marker description-des"
                >Jan 2002 APICS CO.,LTD. for ‘YOKE’ of ‘TOYOTA’ Steering
                Column</span
              >
            </li>
            <li>
              <span class="Expandedp-marker description-des"
                >Nov 2009 KCW CO.,LTD. for ‘Wiper Arm’ of ‘BOSCH’ Wiper Arm
                Set</span
              >
            </li>
            <li>
              <span class="Expandedp-marker description-des"
                >Jun 2010 IIDZKA SEISAKUSHO CO.,LTD. for Cold Forging of ‘KOYO
                JOINT’</span
              >
            </li>
          </ul>
          <br />
          <br />
          <v-row justify="center" align="center">
            <v-col cols="12">
              <img
                class="Founded-img-1pic"
                src="~/assets/uploads/6828/images/about/s19.png"
                alt=""
                 style="width: 100%;"
              />
            </v-col>
          </v-row>
          <br />
          <br />
          <span class="description-blod">Early 2002</span>

          <span class="description-des">
            The company had implemented machine automation and robotics
            thoughout, the variety of manufacturing process, such as welding
            robot, handling robot, CNC machines and stamping automation. The
            company was able to eliminate variables that disrupt the product
            quality. Productivity improvement and better working space safety
            were also the most significant advantages.
          </span>
          <br />
          <br />

          <span class="description-des">
            As the Thai economy was rebound and Thailand was a motorcycle
            assembly hub for export back to the manufacturer’s home country and
            ASEAN. With the company’s sound foundation and continuous
            improvement on manufacturing process, the company’s annual sales
            were back to a record of a billion baht.
          </span>
          <br />
          <br />

          <span class="description-des">
            The below awards were a part of the company’s successful stories:
          </span>
          <br />
          <br />
          <ul>
            <li>
              <span class="Expandedp-marker description-blod"
                >2000 </span
              >
              <span class="description-des"
                >Cost Reduction Achievement Award By Thai Suzuki Motor Co.,Ltd.</span
              >
            </li>
            <li>
              <span class="Expandedp-marker description-blod"
                >2001 – 2003</span
              >
              <span class="description-des">Direct Delivery Certificate by Isuzu Motor Co.,Ltd.</span>
            </li>
            <li>
              <span class="Expandedp-marker description-blod"
                >2003</span
              >
              <span class="description-des"
                >Top 10 Innovative Business By NIA (National Innovation Agency)</span
              >
            </li>
            <li>
              <span class="Expandedp-marker description-des"
                >Kaizen Activities Award by Kawasaki Motor Enterprises Co.,Ltd</span
              >
            </li>
          </ul>
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
 