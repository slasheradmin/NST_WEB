<template>
  <v-container fluid>
    <!-- Header Section -->
    <v-row>
      <v-col cols="12" class="pa-0 Grew-up-position-container">
        <img
          src="~/assets/user_template/6828/slide/1558419565/201906-07-134727_RN-0.jpg"
          alt="Hero Image"
          class="Grew-up-hero-image"
        />
        <span class="Grew-up-overlay-text Grew-up-color-text">{{ pageTitle }}</span>
        <br /><br /><br />
        <span class="Grew-up-overlay-text-U">
          <a class="Grew-up-color-text" href="/Home">HOME</a> / {{ pageTitle }}
        </span>
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-row justify="center">
      <v-col cols="10">
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4">
              <v-row justify="end" class="py-4">
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="searchQuery"
                    label="Search News"
                    append-icon="mdi-magnify"
                    @input="onSearch"
                    clearable
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- News List Section -->
              <v-row>
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
                    style="display: flex; flex-direction: column; height: 100%"
                  >
                    <v-img
                      :src="news.image"
                      class="news-image"
                      style="flex-grow: 1"
                    />
                    <v-card-title style="color: #47B277;">{{ truncate(news.title) }}</v-card-title>


                    <v-card-subtitle>{{ news.date }}</v-card-subtitle>
                    <v-card-text>{{ truncate(news.description) }}</v-card-text>
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
      pageTitle: 'News',
      newsList: [],
      searchQuery: '',
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
    formatTimestamp(timestamp) {
      if (!timestamp || !timestamp.seconds) return '-'
      return moment.unix(timestamp.seconds).fromNow()
    },
    
    truncate(text, maxLength = 65) {
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
    },

    async fetchNews() {
      try {
        const snapshot = await db
          .collection('news')
          .orderBy('time', 'desc')
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

    onSearch() {
      // You can perform any additional search logic if needed here
      console.log('Search query:', this.searchQuery)
    },

    viewNews(news) {
      localStorage.setItem('newsTitle', news.title)
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
  },

  mounted() {
    this.fetchNews()
  },
}
</script>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.news-image {
  width: auto;
  height: 300px;
  object-fit: cover;
}

.v-card-title,
.v-card-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
