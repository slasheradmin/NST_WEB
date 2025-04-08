<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title>
            จัดการข่าวสาร
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="openDialog">เพิ่มข่าว</v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12" sm="12" class="d-flex justify-end">
              <v-text-field
                v-model="searchQuery"
                label="ค้นหาข่าว"
                outlined
                clearable
                dense
                class="mb-4"
                style="max-width: 300px"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="news in filteredNews"
              :key="news.id"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card class="mb-4 d-flex flex-column">
                <v-img
                  :src="news.image"
                  class="ma-4"
                  height="300px"
                  width="auto"
                  contain
                ></v-img>

                <v-card-title>
                  {{ truncateTitle(news.title) }}
                </v-card-title>

                <v-card-subtitle>{{
                  formatTimestamp(news.time)
                }}</v-card-subtitle>
                <v-card-text class="flex-grow-1">
                  {{ truncateDescription(news.description) }}
                </v-card-text>

                <v-card-actions>
                  <v-btn icon @click="editNews(news)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon color="red" @click="deleteNews(news)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialog หลักสำหรับเพิ่มหรือแก้ไขข่าว -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>{{ editing ? 'แก้ไขข่าว' : 'เพิ่มข่าว' }}</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="news.title"
            label="หัวข้อข่าว"
            required
          ></v-text-field>
          <v-textarea
            v-model="news.description"
            label="รายละเอียดข่าว"
            required
          ></v-textarea>
          <v-select
            v-model="news.category"
            :items="categories"
            label="หมวดหมู่ข่าว"
            required
          ></v-select>

          <v-file-input
            label="เลือกรูปภาพ"
            accept="image/*"
            @change="handleImageUpload"
            outlined
            dense
            class="my-4"
          />

          <!-- แสดงภาพที่เลือกแล้ว -->
          <v-img
            v-if="news.image"
            :src="news.image"
            max-height="200px"
            contain
            class="mt-4"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="closeDialog">ยกเลิก</v-btn>
          <v-btn
            color="primary"
            @click="saveNews"
            :loading="loading"
            :disabled="loading || !news.image"
            >บันทึก</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog สำหรับการครอปภาพ -->
    <v-dialog v-model="cropperDialog" max-width="600px">
      <v-card>
        <v-card-title>ครอปรูปภาพ</v-card-title>
        <v-card-text>
          <vue-cropper
            ref="cropper"
            :src="news.image"
            :aspect-ratio="370 / 301"
            auto-crop
          />
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="closeCropperDialog">ยกเลิก</v-btn>
          <v-btn color="green" @click="cropImage">ครอป</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
import { db } from '~/plugins/firebase'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import moment from 'moment'

export default {
  components: { VueCropper },
  layout: 'admin_appbar',

  data() {
    return {
      searchQuery: '',
      dialog: false,
      cropperDialog: false, // ใช้สำหรับแสดง Dialog ครอป
      editing: false,
      editingId: null,
      news: {
        title: '',
        description: '',
        category: '',
        image: '',
        time: null,
        oldImage: null,
      },
      newsList: [],
      categories: ['ประชาสัมพันธ์', 'การผลิต', 'ลูกค้าและพันธมิตร', 'งานแสดงสินค้า', 'การรับรองคุณภาพ'],
      loading: false,
      snackbar: { message: '', color: '' },
    }
  },

  computed: {
    filteredNews() {
      return this.newsList.filter((news) =>
        news.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
  },

  methods: {
    truncateDescription(description) {
      const maxLength = 70 // กำหนดจำนวนตัวอักษรสูงสุด
      if (description && description.length > maxLength) {
        return description.substring(0, maxLength) + '...' // ตัดข้อความและเพิ่ม '...'
      }
      return description
    },
    truncateTitle(title) {
    const maxLength = 40; // กำหนดจำนวนตัวอักษรสูงสุด
    if (title && title.length > maxLength) {
      return title.substring(0, maxLength) + '...'; // ตัดข้อความและเพิ่ม '...'
    }
    return title;
  },
    async fetchNews() {
      const snapshot = await db.collection('news').orderBy('time', 'desc').get()
      this.newsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    },

    openDialog() {
      this.resetForm()
      this.dialog = true
    },

    closeDialog() {
      this.dialog = false
      this.resetForm()
    },
    closeCropperDialog() {
      this.cropperDialog = false
    },

    editNews(item) {
      this.editing = true
      this.editingId = item.id
      this.news = { ...item, oldImage: item.image }
      this.dialog = true
    },

    handleImageUpload(file) {
      if (file) {
        // เคลียร์ค่าภาพเก่า
        this.news.image = ''
        this.news.imageFile = null

        const reader = new FileReader()
        reader.onload = (e) => {
          this.news.image = e.target.result
          this.cropperDialog = true // เปิด Dialog สำหรับการครอป
        }
        reader.readAsDataURL(file)
      }
    },
    cropImage() {
      // รับภาพที่ถูกครอปแล้ว
      this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
        this.news.imageFile = blob

        // แสดงภาพที่ครอปแล้ว
        const reader = new FileReader()
        reader.onload = (e) => {
          this.news.image = e.target.result
        }
        reader.readAsDataURL(blob)

        this.closeCropperDialog() // ปิด Dialog ของการครอป
      }, 'image/jpeg')
    },

    close() {
      this.dialog = false
      this.resetForm() // เรียกใช้งานฟังก์ชั่น resetForm เพื่อล้างข้อมูลในฟอร์ม
    },

    resetForm() {
      this.news = {
        title: '',
        description: '',
        category: '',
        image: '', // ล้างค่ารูปภาพ
        time: null,
        oldImage: null,
      }
      this.editing = false
      this.editingId = null
    },

    async saveNews() {
      if (!this.news.imageFile && !this.news.image) {
        alert('กรุณาครอปภาพหรือเลือกภาพใหม่ก่อนบันทึก')
        return
      }

      this.loading = true
      try {
        let imageUrl = this.news.image

        // ตรวจสอบว่ามีการอัปโหลดรูปใหม่
        if (this.news.imageFile) {
          // ถ้ามีการแก้ไขรูปเก่า, ลบรูปเก่าจาก Firebase Storage
          if (this.editing && this.news.oldImage) {
            await this.deleteOldImage(this.news.oldImage)
          }

          // อัปโหลดภาพใหม่ไปยัง Firebase Storage
          imageUrl = await this.uploadImage(this.news.imageFile)
          if (!imageUrl) throw new Error('อัปโหลดรูปภาพไม่สำเร็จ')
        }

        const newsData = {
          title: this.news.title,
          description: this.news.description,
          category: this.news.category,
          image: imageUrl, // ใช้ imageUrl ที่อัปโหลดใหม่หรือครอปแล้ว
          time: this.editing
            ? this.news.time
            : firebase.firestore.FieldValue.serverTimestamp(),
        }

        if (this.editing) {
          await db.collection('news').doc(this.editingId).update(newsData)
        } else {
          await db.collection('news').add(newsData)
        }

        this.snackbar.message = this.editing
          ? 'บันทึกการแก้ไขข่าวสำเร็จ'
          : 'เพิ่มข่าวสำเร็จ'
        this.snackbar.color = 'success'
        this.fetchNews()
        this.closeDialog()
      } catch (error) {
        this.snackbar.message = `เกิดข้อผิดพลาด: ${error.message}`
        this.snackbar.color = 'error'
      } finally {
        this.loading = false
      }
    },
    async deleteOldImage(imageUrl) {
      try {
        const storageRef = firebase.storage().refFromURL(imageUrl)
        await storageRef.delete()
      } catch (error) {
        console.error('Error deleting old image:', error)
      }
    },

    async uploadImage(file) {
      const storageRef = firebase.storage().ref()
      const fileName = `news_images/${Date.now()}_${file.name}`
      const fileRef = storageRef.child(fileName)

      try {
        const snapshot = await fileRef.put(file)
        return await snapshot.ref.getDownloadURL()
      } catch (error) {
        console.error('Error uploading image:', error)
        return null
      }
    },

    handleImageUpload(file) {
      if (file) {
        // เคลียร์ค่าภาพเก่า
        this.news.image = ''
        this.news.imageFile = null

        const reader = new FileReader()
        reader.onload = (e) => {
          this.news.image = e.target.result
          this.cropperDialog = true // เปิด Dialog สำหรับการครอป
        }
        reader.readAsDataURL(file)
      }
    },
    cropImage() {
      // รับภาพที่ถูกครอปแล้ว
      this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
        this.news.imageFile = blob

        // แสดงภาพที่ครอปแล้ว
        const reader = new FileReader()
        reader.onload = (e) => {
          // เคลียร์ค่าภาพเก่าก่อน
          this.news.image = ''
          this.news.image = e.target.result
        }
        reader.readAsDataURL(blob)

        this.closeCropperDialog() // ปิด Dialog ของการครอป
      }, 'image/jpeg')
    },
    async deleteOldImage(imageUrl) {
      try {
        const storageRef = firebase.storage().refFromURL(imageUrl)
        await storageRef.delete()
      } catch (error) {
        console.error('Error deleting old image:', error)
      }
    },
    async uploadImage(file) {
      const storageRef = firebase.storage().ref()
      const fileName = `news_images/${Date.now()}_${file.name}`
      const fileRef = storageRef.child(fileName)

      try {
        const snapshot = await fileRef.put(file)
        return await snapshot.ref.getDownloadURL()
      } catch (error) {
        console.error('Error uploading image:', error)
        return null
      }
    },

    async deleteOldImage(imageUrl) {
      try {
        const storageRef = firebase.storage().refFromURL(imageUrl)
        await storageRef.delete()
      } catch (error) {
        console.error('Error deleting old image:', error)
      }
    },
    async deleteNews(news) {
      const confirmDelete = confirm('คุณแน่ใจหรือไม่ว่าต้องการลบข่าวนี้?')
      if (!confirmDelete) return

      try {
        // ลบรูปเก่าจาก Firebase Storage (ถ้ามี)
        if (news.image) {
          await this.deleteOldImage(news.image)
        }

        // ลบข้อมูลข่าวออกจาก Firestore
        await db.collection('news').doc(news.id).delete()

        // แสดงข้อความแจ้งเตือน
        this.snackbar.message = 'ลบข่าวสำเร็จ'
        this.snackbar.color = 'success'

        // รีเฟรชข้อมูลข่าว
        this.fetchNews()
      } catch (error) {
        console.error('Error deleting news:', error)
        this.snackbar.message = `เกิดข้อผิดพลาด: ${error.message}`
        this.snackbar.color = 'error'
      }
    },

    resetForm() {
      this.news = {
        title: '',
        description: '',
        category: '',
        image: '', // ล้างค่ารูปภาพเดิม
        time: null,
        oldImage: null, // ล้างข้อมูลเก่าของภาพ
      }
      this.editing = false
      this.editingId = null
    },
    formatTimestamp(timestamp) {
      if (!timestamp || !timestamp.seconds) return '-'
      return moment.unix(timestamp.seconds).fromNow()
    },
  },

  mounted() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        // หากยังไม่ได้ล็อกอินจะไปหน้า Login
        this.$router.push("/login");
      }
    this.fetchNews()
  },
}
</script>
