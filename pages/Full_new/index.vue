<template>
  <v-container fluid>
    <!-- Header -->
    <v-row>
      <v-col cols="12" class="pa-0 Grew-up-position-container">
        <img
          src="~/assets/user_template/6828/slide/1558419565/201906-07-134727_RN-0.jpg"
          alt="Hero Image"
          class="Grew-up-hero-image"
        />
        <span class="Grew-up-overlay-text Grew-up-color-text">{{ text }}</span>
        <br><br><br>
        <span class="Grew-up-overlay-text-U">
          <a class="Grew-up-color-text" href="/news">News</a> / {{ text }}
        </span>
      </v-col>
    </v-row>

    <!-- Content -->
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-col cols="12">
            <v-row justify="center">
              <v-col cols="8">
                <v-img
                  :src="news.image"
                  :alt="news.title"
                  class="mb-4"
                  width="100%"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-card-title class="headline text-green-20px">{{ news.title }}</v-card-title>
            <v-card-text>
              <p>{{ news.description }}</p>
              <p><strong>หมวดหมู่:</strong> {{ news.category }} {{ formatTimestamp(news.time) }}</p>
            </v-card-text>
            <!-- Like and Share Buttons -->
            <v-card-actions>
              <v-btn
                :color="news.liked ? 'success' : 'primary'"
                small
                @click="toggleLike"
              >
                <v-icon left>mdi-thumb-up</v-icon>
                {{ news.likes || 0 }} Likes
              </v-btn>
              <v-btn @click="shareNews" color="secondary" small>
                <v-icon left>mdi-share-variant</v-icon> Share ({{ news.shares || 0 }})
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '~/plugins/firebase'
import moment from 'moment'

export default {
  data() {
    return {
      news: this.$route.query, // ดึงข้อมูลจาก query
      text: '', // Initialize text as an empty string
    }
  },
  mounted() {
    // Retrieve the news title from localStorage
    this.text = localStorage.getItem('newsTitle') || 'News';
    
    // ดึงข้อมูลข่าวจาก Firestore โดยใช้ news.id หรือข่าวที่ระบุ
    this.fetchNews()
  },
  methods: {
    // ดึงข้อมูลจาก Firestore
    async fetchNews() {
      const newsRef = db.collection('news').doc(this.news.id)
      try {
        const doc = await newsRef.get()
        if (doc.exists) {
          // ถ้าข้อมูลข่าวมีอยู่ใน Firestore
          this.news = doc.data()
        }
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    },

    // ฟังก์ชันการแสดงเวลาในรูปแบบที่เหมาะสม
    formatTimestamp(timestamp) {
      if (!timestamp || !timestamp.seconds) return '-'
      return moment.unix(timestamp.seconds).fromNow() // ใช้ moment เพื่อแปลงเวลา
    },

    // Toggle Like Function
    async toggleLike() {
      const newsRef = db.collection('news').doc(this.news.id)
      try {
        const doc = await newsRef.get()
        if (doc.exists) {
          let currentLikes = doc.data().likes || 0
          if (this.news.liked) {
            // Unlike
            await newsRef.update({ likes: Math.max(0, currentLikes - 1) })
            this.news.likes = Math.max(0, currentLikes - 1)
          } else {
            // Like
            await newsRef.update({ likes: currentLikes + 1 })
            this.news.likes = currentLikes + 1
          }
          this.news.liked = !this.news.liked
        }
      } catch (error) {
        console.error('Error toggling like:', error)
      }
    },

    // Share News Function
    async shareNews() {
      const shareData = {
        title: this.news.title,
        text: `Check out this news: ${this.news.title}`,
        url: `${window.location.origin}`,
      }

      try {
        if (navigator.share) {
          await navigator.share(shareData)
        } else {
          alert(`Share this link: ${window.location.origin}`)
        }

        // อัปเดตจำนวนแชร์ไปยัง Firestore
        const newsRef = db.collection('news').doc(this.news.id)
        const doc = await newsRef.get()
        if (doc.exists) {
          const currentShares = doc.data().shares || 0
          await newsRef.update({ shares: currentShares + 1 })
          this.news.shares = currentShares + 1
        }
      } catch (error) {
        console.error('Error sharing news:', error)
      }
    },
  },
}
</script>

<style scoped>
.mb-4 {
  margin-bottom: 16px;
}
.text-green-20px {
  font-size: 20px;
  color: #118A46;
}
@media (max-width: 600px) {
  .Grew-up-color-text {
    font-size: 10px !important;
  }
}
</style>
