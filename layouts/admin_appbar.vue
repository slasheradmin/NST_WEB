<template>
  <v-app>
    <!-- Sidebar - แสดงเฉพาะหน้าจอใหญ่ -->
    <v-navigation-drawer 
      :clipped="true" 
      app 
      class="sidebar hidden-sm-and-down"
    >
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        link
        @click="goToPage(item.title)"
        :class="{'menu-item': true, 'active-menu': selectedMenu === item.title}" 
      >
        <v-list-item-content>
          <v-list-item-title class="menu-item">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <!-- Navbar -->
    <v-app-bar :clipped-left="true" app class="navbar">
      <!-- ปุ่มเมนู แสดงเฉพาะหน้าจอเล็ก -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <img
        src="../assets/nst.co.th/user_template/6828/images/logo.png"
        alt="Logo"
        @click="goToIndex"
        class="logo"
      />
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Content Area -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- Sidebar (temporary สำหรับหน้าจอเล็ก) -->
    <v-navigation-drawer 
      v-model="drawer"
      app 
      class="sidebar hidden-md-and-up" 
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          link
          @click="goToPage(item.title)"
          :class="{'menu-item': true, 'active-menu': selectedMenu === item.title}" 
        >
          <v-list-item-content>
            <v-list-item-title class="menu-item">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // สำหรับควบคุมการเปิดปิด Sidebar ในหน้าจอเล็ก
      selectedMenu: '', // เก็บเมนูที่เลือก
      menuItems: [
        { title: 'จัดการ HOME', icon: 'mdi-home' },
        { title: 'จัดการ ABOUT US', icon: 'mdi-information' },
        { title: 'จัดการ HOW WE WORK', icon: 'mdi-cogs' },
        { title: 'จัดการ TECHNOLOGY', icon: 'mdi-laptop' },
        { title: 'จัดการ NEWS', icon: 'mdi-newspaper', route: '/admin' },
        { title: 'จัดการ CONTACT US', icon: 'mdi-phone' },
      ],
    }
  },
  methods: {
    goToIndex() {
      this.$router.push('/')
    },
    goToPage(page) {
      this.selectedMenu = page // กำหนดเมนูที่เลือก
      const menuItem = this.menuItems.find((item) => item.title === page)
      if (menuItem && menuItem.route) {
        this.$router.push(menuItem.route)
      } else {
        this.$router.push(`/${page.toLowerCase().replace(/\s+/g, '-')}`)
      }
      this.drawer = false // ปิด Sidebar เมื่อเลือกเมนูบนหน้าจอเล็ก
    },
    logout() {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
/* ---- Sidebar ---- */
.sidebar {
  background-color: #085529;
  width: 200px !important;
  padding-top: 10px;
  margin: center !important;
}

/* ---- Menu Items ---- */
.menu-item {
  color: #ffffff !important;
  padding: 5px 5px !important;
  border-radius: 5px;
  transition: background 0.3s;
  font-family: 'Roboto', sans-serif;
  font-size: 14px !important;
}

.menu-item:hover {
  background-color: rgb(9, 196, 68) !important;
  color: #ffffff !important;
}

/* ---- Active Menu (Highlight the selected menu) ---- */
.active-menu {
  background-color: rgb(9, 196, 68) !important;
  color: #ffffff !important;
}

/* ---- Navbar ---- */
.navbar {
  background-color: #0f8a45 !important;
}

/* ---- Logo Styling ---- */
.logo {
  height: 50px;
  cursor: pointer;
}
</style>
