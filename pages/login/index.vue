<template>
  <v-container class="login-container">
    <v-dialog v-model="loginDialog" persistent max-width="360px">
      <v-card class="login-card">
        <v-card-title class="text-center title">เข้าสู่ระบบ</v-card-title>
        <v-card-text>
          <v-form ref="loginForm">
            <v-text-field 
              v-model="username" 
              label="Username" 
              required 
              outlined 
              dense
            ></v-text-field>
            <v-text-field 
              v-model="password" 
              label="Password" 
              type="password" 
              required 
              outlined 
              dense
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="button-container">
          <v-btn class="login-btn" @click="login" :loading="loading">
            เข้าสู่ระบบ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  data() {
    return {
      username: "",
      password: "",
      loginDialog: true,
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        const userRef = firebase.firestore().collection("user").doc("admin");
        const doc = await userRef.get();

        if (doc.exists) {
          const data = doc.data();
          if (this.username === data.username && this.password === data.password) {
            // เมื่อเข้าสู่ระบบสำเร็จ
            localStorage.setItem('isLoggedIn', 'true');  // เก็บสถานะการล็อกอิน
            localStorage.setItem('username', this.username);  // เก็บชื่อผู้ใช้
            alert("เข้าสู่ระบบสำเร็จ!");
            this.$router.push("/admin"); // เปลี่ยนเส้นทางไปยังหน้า Admin
          } else {
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
          }
        } else {
          alert("ไม่พบข้อมูลผู้ใช้");
        }
      } catch (error) {
        console.error("Firebase Error:", error);
        alert("เกิดข้อผิดพลาด: " + error.message);
      }
      this.loading = false;
    },
  },
};
</script>
