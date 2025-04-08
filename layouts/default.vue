<template>
  <v-app>
    <v-navigation-drawer
      class="bg-navbar-default"
      v-model="toggleDrawer"
      fixed
      app
      :disable-resize-watcher="true"
    >
      <v-list>
        <v-list-item-group>
          <div v-for="(mainMenu, i) in menuItems" :key="i">
            <v-list-item
              active-class="active-list"
              v-if="!mainMenu.dropdown"
              @click="handleClick(mainMenu.route)"
              router
              exact
            >
              <v-list-item-content>
                <v-list-item-title>{{ mainMenu.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group no-action v-else active-class="active-list">
              <template v-slot:activator>
                <v-list-item-title>
                  {{ mainMenu.text }}
                </v-list-item-title>
              </template>
              <v-list-item
                active-class="active-list"
                v-for="(subMenu, j) in mainMenu.subMenu"
                :key="j"
                @click="handleSubMenuClick(subMenu.route)"
              >
                <v-list-item-title>
                  {{ subMenu.text }}
                </v-list-item-title>
              </v-list-item>
            </v-list-group>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar class="app-bar" app fixed>
      <!-- <v-col cols="2"> -->
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="toggleDrawer = !toggleDrawer"
        dark
      />
      <!-- </v-col> -->

      <v-row class="hidden-md-and-up" justify="center">
        <v-col cols="6" class="text-center">
          <img
            src="../assets/nst.co.th/user_template/6828/images/logo01.png"
            alt="Logo"
            @click="goToIndex"
            style="max-width: 100%; cursor: pointer"
          />
        </v-col>
      </v-row>

      <v-row no-gutters class="hidden-sm-and-down">
        <v-col cols="6" sm="4" class="text-center">
          <!-- คลิกที่รูปแล้วไปที่หน้า index -->
          <img
            class="logo mt-2"
            src="../assets/nst.co.th/user_template/6828/images/logo01.png"
            alt="Logo"
            @click="goToIndex"
            style="max-width: 100%; cursor: pointer"
          />
        </v-col>

        <v-col cols="6" sm="8">
          <v-row justify="start" align="center" class="menu-container">
            <div
              v-for="(item, index) in menuItems"
              :key="index"
              class="my-8"
              cols="auto"
            >
              <v-menu
                v-if="item.dropdown"
                open-on-hover
                offset-y
                v-model="item.visible"
              >
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                    class="menu-item clickable-text"
                  >
                    {{ item.text }}
                  </span>
                </template>
                <v-list :class="getMenuClass(item.text)">
                  <v-list-item
                    v-for="(subItem, subIndex) in item.subMenu"
                    :key="subIndex"
                    @click="handleSubMenuClick(subItem.route)"
                  >
                    <v-list-item-title class="v-list">{{
                      subItem.text
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <!-- Non-Dropdown Menu -->
              <span
                v-else
                class="menu-item clickable-text"
                @click="handleClick(item.route)"
              >
                {{ item.text }}
              </span>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <nuxt />
    </v-main>

    <!-- Footer -->
    <v-footer
      class="footer"
    >
      <v-container>
        <v-row
          ref="rowElement"
          justify="space-between"
          align="center"
          class="animate__animated"
          :class="{
            animate__fadeInUp: isVisible.section2,
          }"
        >
          <v-col cols="12" sm="4">
            <p class="footer-title">NST : New Somthai Motor Work Co.,Ltd.</p>
            <p class="tel">
              &copy; {{ new Date().getFullYear() }}. All rights reserved.<br />
              New Somthai Motor Work Co.,Ltd.
            </p>
          </v-col>
          <v-col cols="12" sm="2" class="tel">
            <p>
              <a href="tel:+6623169324" class="manu_footer"
                >TEL: +66 2 316 9324-31</a
              ><br />
              <a href="fax:+6623168431" class="manu_footer"
                >FAX: +66 2 316 8431-2</a
              >
            </p>
          </v-col>
          <v-col cols="12" sm="2" class="footer-btn">
            <v-row>
              <a
                @click="our('Motorcycle Parts')"
                dark
                rounded
                class="manu_footer"
                outlined
                >About Us</a
              >
            </v-row>
            <v-row>
              <a
                @click="product('Motorcycle Parts')"
                dark
                rounded
                class="manu_footer"
                outlined
                >Products</a
              >
            </v-row>
            <v-row>
              <a
                @click="HOW_WE_WORK('HOW_WE_WORK')"
                dark
                rounded
                class="manu_footer"
                outlined
                >HOW WE WORK</a
              >
            </v-row>
          </v-col>
          <v-col cols="12" sm="2" class="footer-btn">
            <v-row>
              <a
                @click="Technology('Technology')"
                dark
                rounded
                class="manu_footer"
                outlined
                >Technology</a
              >
            </v-row>
            <v-row>
              <a @click="News('News')" dark rounded class="manu_footer" outlined
                >News</a
              >
            </v-row>
            <v-row>
              <a
                @click="Contact_Us('Contact Us')"
                dark
                rounded
                class="manu_footer"
                outlined
                >Contact Us</a
              >
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
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
        section1: false,
        section2: false,
      },
      toggleDrawer: false,
      menuItems: [
        { text: 'HOME', route: '/Home', dropdown: false },
        {
          text: 'ABOUT US',
          route: '',
          dropdown: true,
          visible: false,
          subMenu: [
            { text: 'Our Story', route: '/About/Our-story' },
            { text: 'Achievements', route: '/About/Achievements' },
            { text: 'Customers', route: '/About/Customers' },
            { text: 'Global Partners', route: '/About/Global-Partners' },
            { text: 'ESG', route: '/About/ESG' },
          ],
        },
        {
          text: 'PRODUCTS',
          route: '',
          dropdown: true,
          visible: false,
          subMenu: [
            { text: 'Motorcycle Parts', route: '/motorcycle' },
            { text: 'Automotive Parts', route: '/automotive' },
            { text: 'Home Appliances', route: '/home-appliance' },
            { text: 'Heavy Equipment', route: '/Heavy' },
          ],
        },
        { text: 'HOW WE WORK', route: '/how_we_work', dropdown: false },
        { text: 'TECHNOLOGY', route: '/technology', dropdown: false },
        { text: 'NEWS', route: '/news', dropdown: false },
        { text: 'CONTACT US', route: '/contact', dropdown: false },
      ],
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
    goToIndex() {
      this.$router.push({ path: '/' })
    },
    our(text) {
      localStorage.setItem('selectedSubMenu', text)
      this.$router.push({ path: '/About/Our-story' })
    },
    product(text) {
      localStorage.setItem('selectedSubMenu', text)
      this.$router.push({ path: '/motorcycle' })
    },
    HOW_WE_WORK(text) {
      localStorage.setItem('selectedSubMenu', text)
      this.$router.push({ path: '/how_we_work' })
    },
    Technology(text) {
      localStorage.setItem('selectedSubMenu', text)
      this.$router.push({ path: '/technology' })
    },
    News(text) {
      localStorage.setItem('selectedSubMenu', text)
      this.$router.push({ path: '/news' })
    },
    Contact_Us(text) {
      localStorage.setItem('selectedSubMenu', text)
      this.$router.push({ path: '/contact' })
    },
    handleClick(route) {
      const pageMap = {
        '/contact': 'Contact Us',
        '/news': 'News',
        '/technology': 'Technology',
      }
      if (pageMap[route]) {
        localStorage.setItem('selectedSubMenu', pageMap[route])
      }
      this.$router.push(route)
    },
    handleSubMenuClick(subMenu) {
      const subMenuMap = {
        '/About/Achievements': 'Achievements',
        '/About/Customers': 'Customers',
        '/About/Global-Partners': 'Global Partners',
        '/About/ESG': 'ESG',
        '/motorcycle': 'Motorcycle Parts',
        '/automotive': 'Automotive Parts',
        '/home-appliance': 'Home Appliances',
        '/Heavy': 'Heavy Equipment',
      }
      if (subMenuMap[subMenu]) {
        localStorage.setItem('selectedSubMenu', subMenuMap[subMenu])
      }
      this.$router.push({ path: subMenu })
    },
    handleFooterLinkClick(link) {
      const routeMap = {
        'About Us': '/About/Our-story',
        Products: '/motorcycle',
        'How We Work': '/how_we_work',
        Technology: '/technology',
        News: '/news',
        'Contact Us': '/contact',
      }
      if (routeMap[link]) {
        localStorage.setItem('selectedFooterLink', link)
        this.$router.push(routeMap[link])
      }
    },
    getMenuClass(menuText) {
      return menuText === 'ABOUT US'
        ? 'about-us'
        : menuText === 'PRODUCTS'
        ? 'products'
        : ''
    },
    truncate(text, maxLength = 65) {
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
    },
    formatTimestamp(timestamp) {
      if (!timestamp || !timestamp.seconds) return '-'
      return moment.unix(timestamp.seconds).fromNow()
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
    checkVisibility() {
      const footer = this.$refs.footer
      const rowElement = this.$refs.rowElement

      // ตรวจสอบความมองเห็น footer
      if (
        footer &&
        footer.$el &&
        typeof footer.$el.getBoundingClientRect === 'function'
      ) {
        const rectFooter = footer.$el.getBoundingClientRect()
        this.isVisible.section1 = rectFooter.top < window.innerHeight * 0.9
      }

      // ตรวจสอบความมองเห็น row
      if (
        rowElement &&
        typeof rowElement.getBoundingClientRect === 'function'
      ) {
        const rectRow = rowElement.getBoundingClientRect()
        this.isVisible.section2 = rectRow.top < window.innerHeight * 0.9
      }
    },
  },

  mounted() {
    this.fetchNews()
    window.addEventListener('scroll', this.checkVisibility)
    this.checkVisibility()
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.checkVisibility)
  },
}
</script>

<style>
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
</style>

