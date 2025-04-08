<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pa-0">
        <img
          src="~/assets/user_template/6828/slide/home/201907-03-152303_Tr-0.jpg"
          alt=""
          class="img-banner"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="bg-gear pa-0" cols="10" md="10">
        <v-row
          ref="section2"
          :class="{
            animate__animated: isVisible.section2,
            animate__fadeInUp: isVisible.section2,
          }"
          class="font hidden-sm-and-down"
          justify="center"
        >
          <v-col cols="2" sm="6" md="3">
            <v-card class="custom-card" outlined>
              <div class="image-wrapper">
                <img
                  src="~/assets/uploads/6828/images/motor_part.png"
                  alt="Motor Part"
                />
              </div>
              <h3 class="text-center card-title">Motorcycle parts</h3>
              <v-card-actions class="justify-center card-actions">
                <v-btn
                  @click="product('MOTORCYCLE PARTS')"
                  dark
                  rounded
                  class="custom-btn"
                  outlined
                  >VIEW MORE</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="2" sm="6" md="3">
            <v-card class="custom-card" outlined>
              <div class="image-wrapper">
                <img src="~/assets/uploads/6828/images/auto_part.png" alt="" />
              </div>
              <h3 class="text-center card-title">Automative Parts</h3>
              <v-card-actions class="justify-center">
                <v-btn
                  @click="product('AUTOMOTIVE PARTS')"
                  dark
                  rounded
                  class="custom-btn"
                  outlined
                  >VIEW MORE</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="2" sm="6" md="3">
            <v-card class="custom-card" outlined>
              <div class="image-wrapper">
                <img src="~/assets/uploads/6828/images/home_part.png" alt="" />
              </div>
              <h3 class="text-center card-title">Home appliances</h3>
              <v-card-actions class="justify-center">
                <v-btn
                  @click="product('HOME APPLIANCES')"
                  dark
                  rounded
                  class="custom-btn"
                  outlined
                  >VIEW MORE</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="2" sm="6" md="3">
            <v-card class="custom-card" outlined>
              <div class="image-wrapper">
                <img src="~/assets/uploads/6828/images/heavy_part.png" alt="" />
              </div>
              <h3 class="text-center card-title">Heavy equipment</h3>
              <v-card-actions class="justify-center">
                <v-btn
                  @click="product('HEAVY EQUIPMENT')"
                  dark
                  rounded
                  class="custom-btn"
                  outlined
                  >VIEW MORE</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col
            cols="10"
            align="center "
            ref="section2"
            :class="{
              animate__animated: isVisible.section2,
              animate__fadeInUp: isVisible.section2,
            }"
          >
            <h1 class="Welcome">Welcome to NST</h1>
            <p class="span">
              Welcome to New Somthai Motor Work. We believe that quality
              products are the key for our customers’ success along with our
              competitive cost and punctual delivery. We hope you’ll enjoy
              exploring our website and find our commitment to quality with over
              50 year expertise, competitive processes, and advanced technology,
              which build NST.
            </p>
            <br />
          </v-col>
        </v-row>
        <v-row class="font a hidden-md-and-up" justify="center">
          <v-col sm="6" md="3">
            <v-card class="custom-card" outlined>
              <div class="">
                <img
                  src="~/assets/uploads/6828/images/motor_part.png"
                  alt="Motor Part"
                />
              </div>
              <h3 class="text-center card-title">Motorcycle parts</h3>
              <v-card-actions class="justify-center card-actions">
                <v-btn
                  @click="product('MOTORCYCLE PARTS')"
                  dark
                  rounded
                  class="custom-btn"
                  outlined
                  >VIEW MORE</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="6" md="3">
            <v-card class="custom-card" outlined>
              <div class="">
                <img src="~/assets/uploads/6828/images/auto_part.png" alt="" />
              </div>
              <h3 class="text-center card-title">Automative Parts</h3>
              <v-card-actions class="justify-center">
                <v-btn
                  @click="product('AUTOMOTIVE PARTS')"
                  dark
                  rounded
                  class="custom-btn"
                  outlined
                  >VIEW MORE</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="6" md="3">
            <v-card class="custom-card" outlined>
              <div class="">
                <img src="~/assets/uploads/6828/images/home_part.png" alt="" />
              </div>
              <h3 class="text-center card-title">Home appliances</h3>
              <v-card-actions class="justify-center">
                <v-btn
                  @click="product('HOME APPLIANCES')"
                  dark
                  rounded
                  class="custom-btn"
                  outlined
                  >VIEW MORE</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="6" md="3">
            <v-card class="custom-card" outlined>
              <div class="">
                <img src="~/assets/uploads/6828/images/heavy_part.png" alt="" />
              </div>
              <h3 class="text-center card-title">Heavy equipment</h3>
              <v-card-actions class="justify-center">
                <v-btn
                  @click="product('HEAVY EQUIPMENT')"
                  dark
                  rounded
                  class="custom-btn"
                  outlined
                  >VIEW MORE</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="10" align="center ">
            <h1
              class="Welcome"
              ref="section2"
              :class="{
                animate__animated: isVisible.section2,
                animate__fadeInUp: isVisible.section2,
              }"
            >
              Welcome to NST
            </h1>
            <p
              class="span"
              ref="section3"
              :class="{
                animate__animated: isVisible.section3,
                animate__fadeInUp: isVisible.section3,
              }"
            >
              Welcome to New Somthai Motor Work. We believe that quality
              products are the key for our customers’ success along with our
              competitive cost and punctual delivery. We hope you’ll enjoy
              exploring our website and find our commitment to quality with over
              50 year expertise, competitive processes, and advanced technology,
              which build NST.
            </p>
            <br />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="bg-gary">
      <v-col
        cols="12"
        ref="section2"
        :class="{
          animate__animated: isVisible.section2,
          animate__fadeInUp: isVisible.section2,
        }"
      >
        <h1 class="Welcome pa-10 text-center">Latest News</h1>
      </v-col>
      <v-row justify="center" class="bg-gary">
        <v-col cols="10">
          <v-card class="pa-4">
            <!-- News List Section -->
            <v-row
              ref="section3"
              :class="{
                animate__animated: isVisible.section3,
                animate__fadeInUp: isVisible.section3,
              }"
            >
              <v-col
                v-for="(news, index) in filteredNews"
                :key="index"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card
                  class="news-card"
                  @click="viewNews(news)"
                  style="
                    display: flex;
                    flex-direction: column;
                    height: 100% width=100%;
                  "
                >
                  <v-col
                    class="d-flex align-center justify-center"
                  >
                    <v-img :src="news.image" class="news-image" />
                  </v-col>

                  <v-card-title style="color: #47B277;">{{ truncate(news.title) }}</v-card-title>
                  <v-card-text>{{
                    truncateDescription(news.description)
                  }}</v-card-text>
                  <v-card-subtitle>
                    {{ formatTimestamp(news.time) }}
                    <br /><br />
                    <v-btn
                      :color="news.liked ? 'success' : 'primary'"
                      small
                      @click.stop="toggleLike(news)"
                    >
                      <v-icon left>mdi-thumb-up</v-icon>
                      {{ news.likes || 0 }} Likes
                    </v-btn>
                    <v-btn @click="shareNews(news)" color="secondary" small>
                      <v-icon left>mdi-share-variant</v-icon> Share ({{
                        news.shares || 0
                      }})
                    </v-btn>
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
    <v-row class="bg-gary" justify="center" align="center">
      <a
        class="more-text-seeall"
        style="font-size: 40px"
        href="news"
        ref="section5"
        :class="{
          animate__animated: isVisible.section5,
          animate__fadeInUp: isVisible.section5,
        }"
        >See All >></a
      >
    </v-row>
    <v-row class="bg-video">
      <v-col
        cols="12 "
        align="center"
        ref="section6"
        :class="{
          animate__animated: isVisible.section6,
          animate__fadeInUp: isVisible.section6,
        }"
      >
        <h1 class="bg-video-text" style="margin-top: 50px">About Us</h1>
        <span class="bg-video-test-detail">
          New Somthai Motor Work was established in 1965
        </span>
      </v-col>

      <v-row justify="center" style="margin-top: 20px">
        <!-- Align rows to the start (top) -->
        <v-col
          cols="12"
          md="4"
          ref="section7"
          :class="{
            animate__animated: isVisible.section7,
            animate__fadeInUp: isVisible.section7,
          }"
          class="d-flex flex-column"
        >
          <v-card outlined class="pa-0 text-center">
            <h1 style="margin-top: 20px">NST History</h1>
            <v-col cols="12 ">
              <span class="custom-heading-History">
                New Somthai Motor Work was established in 1965 under the name
                “Somthai Engineering” by Mr. Somchai Prasertthavorn. During the
                early years, the shop manufactured ball bearings for different
                kinds of engines. In 1974, driven by the founder’s
                entrepreneurial spirit and vision for emerging opportunities in
                the automotive industry, the factory was relocated to a larger
                facility on Sukhumvit road. The company was renamed New Somthai
                Motor Work, and business had expanded and improved to enter the
                global competition.
                <br />

                <router-link to="/About/Our-story" class="read-more"
                  >Read More</router-link
                >
              </span>
            </v-col>
          </v-card>
        </v-col>

        <v-col
          cols="12 "
          md="6"
          ref="section7"
          :class="{
            animate__animated: isVisible.section7,
            animate__fadeInUp: isVisible.section7,
          }"
          class="d-flex flex-column justify-start"
        >
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            frameborder="0"
            src="https://www.youtube.com/embed/1ZcTM5c4ruY"
            width="100%"
            height="310"
          ></iframe>
        </v-col>
      </v-row>

      <v-col
        cols="12"
        align="center"
        class="Achievements"
        ref="section4"
        :class="{
          animate__animated: isVisible.section4,
          animate__fadeInUp: isVisible.section4,
        }"
      >
        <span class="Achievements">Achievements</span></v-col
      >
      <v-col cols="12" align="center">
        <v-row justify="center" align="center">
          <v-col cols="6">
            <img
              src="~/assets/uploads/6828/images/p_award.jpg"
              alt=""
              style="width: 100%"
              ref="section4"
              :class="{
                animate__animated: isVisible.section4,
                animate__fadeInUp: isVisible.section4,
              }"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="bg-black" align="center" justify="center">
      <v-col cols="12" md="8">
        <v-row
          ref="section1"
          :class="{
            animate__animated: isVisible.section1,
            animate__fadeInUp: isVisible.section1,
          }"
        >
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_kawa.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_isuzu.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_honda.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_suzuki.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_cat.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_daikin.jpg"
              alt=""
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="bg-black" align="center" justify="center">
      <v-col cols="12" md="8">
        <v-row
          align="center"
          justify="center"
          ref="section1"
          :class="{
            animate__animated: isVisible.section1,
            animate__fadeInUp: isVisible.section1,
          }"
        >
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_koyo.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_daisin.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_bosch.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_walker.png"
              alt=""
            />
          </v-col>
          <v-col cols="2">
            <img
              width="100%"
              src="~/assets/uploads/6828/images/l_yamaha.png"
              alt=""
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="bg-black">
      <div class="green-line"></div>
    </v-row>
  </v-container>
</template>
<script>
import { db } from '~/plugins/firebase'
import moment from 'moment'
import 'animate.css'

export default {
  data() {
    return {
      drawer: false,
      group: null,
      newsList: [],
      searchQuery: '',
      text: '',
      isVisible: {
        section1: true,
        section2: true,
        section3: true,
        section4: true,
        section5: true,
        section6: true,
        section7: true,
      },
    }
  },
  

  computed: {
    filteredNews() {
      if (!this.searchQuery) return this.newsList
      const query = this.searchQuery.toLowerCase()
      return this.newsList.filter(
        (news) =>
          news.title.toLowerCase().includes(query) ||
          news.description.toLowerCase().includes(query) ||
          news.category.toLowerCase().includes(query)
      )
    },
  },

  methods: {
    truncate(text, maxLength = 65) {
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
    },
    formatTimestamp(timestamp) {
      if (!timestamp || !timestamp.seconds) return '-'
      return moment.unix(timestamp.seconds).fromNow()
    },
    product(text) {
      localStorage.setItem('selectedSubMenu', text)
      this.$router.push({ path: '/motorcycle' })
    },

    async fetchNews() {
      try {
        const snapshot = await db
          .collection('news')
          .orderBy('time', 'desc')
          .limit(3)
          .get()
        this.newsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          liked: false,
        }))
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    },

    async toggleLike(news) {
      const newsRef = db.collection('news').doc(news.id)
      try {
        const doc = await newsRef.get()
        if (doc.exists) {
          let currentLikes = doc.data().likes || 0
          if (news.liked) {
            await newsRef.update({ likes: Math.max(0, currentLikes - 1) })
            news.likes = Math.max(0, currentLikes - 1)
          } else {
            await newsRef.update({ likes: currentLikes + 1 })
            news.likes = currentLikes + 1
          }
          news.liked = !news.liked
        }
      } catch (error) {
        console.error('Error toggling like:', error)
      }
    },

    async shareNews(news) {
      const shareData = {
        title: news.title,
        text: `Check out this news: ${news.title}`,
        url: `${window.location.origin}`,
      }
      try {
        if (navigator.share) {
          await navigator.share(shareData)
        } else {
          alert(`Share this link: ${window.location.origin}`)
        }
        const newsRef = db.collection('news').doc(news.id)
        const doc = await newsRef.get()
        if (doc.exists) {
          const currentShares = doc.data().shares || 0
          await newsRef.update({ shares: currentShares + 1 })
          news.shares = currentShares + 1
        }
      } catch (error) {
        console.error('Error sharing news:', error)
      }
    },

    truncateDescription(description) {
      const maxLength = 100
      return description.length > maxLength
        ? description.slice(0, maxLength) + '...'
        : description
    },

    formatTime(timestamp) {
      const date = timestamp.toDate()
      return date.toLocaleString()
    },

    viewNews(news) {
      this.$router.push({
        name: 'Full_new',
        query: {
          id: news.id,
          title: news.title,
          description: news.description,
          date: news.date,
          category: news.category,
          image: news.image,
          likes: news.likes,
        },
      })
    },

    checkVisibility() {
      Object.keys(this.isVisible).forEach((section) => {
        const el = this.$refs[section]
        if (el) {
          const rect = el.getBoundingClientRect()
          this.isVisible[section] = rect.top < window.innerHeight * 0.9
        }
      })
    },
  },

  mounted() {
    this.fetchNews()
    window.addEventListener('scroll', this.checkVisibility)
    this.checkVisibility()
  },

  
}
</script>

<style scoped>
.news-meta {
  font-size: 12px !important;
  font-family: 'Roboto', sans-serif;
}
.custom-card-new {
  flex-direction: column;
  height: 100%;
}
.news-image {
  width: 300px;
  height: auto;
  object-fit: cover;
}
.detail-new {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 50px;
}
.more-text-seeall {
  color: #47b277;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 27px !important;
  margin-top: 50px;
  margin-bottom: 50px;
}
/* Add custom animation classes */
.animate__fadeInUp {
  animation: fadeInUp 1.5s ease-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.read-more {
  color: #47b277; /* เปลี่ยนสีเป็นเขียว */
  text-decoration: none; /* เอาขีดเส้นใต้ลิงก์ออก */
  font-weight: bold;
  font-family: 'Roboto', sans-serif; /* ใช้ฟอนต์ Roboto */
}

.read-more:hover {
  text-decoration: underline; /* ขีดเส้นใต้เมื่อ hover */
  color: #000000;
  font-family: 'Roboto', sans-serif; /* ใช้ฟอนต์ Roboto */
}
</style>