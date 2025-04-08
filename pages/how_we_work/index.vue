<template>
  <v-container fluid>
    <!-- Hero Image Section -->
    <v-row>
      <v-col cols="12" class="pa-0">
        <img
          src="~/assets/user_template/6828/slide/1558421927/201907-11-135037_Yn-0.jpg"
          alt="Hero Image"
          class="img-banner-how-we-work"
        />
      </v-col>
    </v-row>

    <!-- Timeline Section -->
    <v-row justify="center" class="bg-how-we-work">
      <v-col cols="12" md="8">
        <v-timeline
          :dense="$vuetify.breakpoint.smAndDown"
          :direction="$vuetify.breakpoint.smAndDown ? 'vertical' : 'horizontal'"
        >
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="hoverIndex === i ? 'green' : item.color"
            small
            fill-dot
            v-scroll-animation="(i * 0.3) + 's'"
            @mouseover="hoverIndex = i"
            @mouseleave="hoverIndex = null"
          >
            <v-row class="py-4 image">
              <span
                class="text-title-timeline"
                :class="{
                  'text-green': hoverIndex === i,
                  [item.color]: hoverIndex !== i
                }"
                v-text="item.title"
              ></span>

              <v-card
                class="card-timeline"
                :class="{ 'sm-card': $vuetify.breakpoint.smAndDown }"
                @mouseover="hoverIndex = i"
                @mouseleave="hoverIndex = null"
              >
                <v-img
                  :src="require(`~/assets/uploads/6828/images/how_we_work/${item.img}`)"
                  class="top-img"
                  style="width: 100%;"
                ></v-img>
                <span>{{ item.description }}</span>
              </v-card>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Step 01", description: "Customer Request", img: "s1.jpg", color: "text-gray" },
      { title: "Step 02", description: "3R Prototyping", img: "s2.jpg", color: "text-gray" },
      { title: "Step 03", description: "Design Review", img: "s3.jpg", color: "text-gray" },
      { title: "Step 04", description: "Try Out", img: "s4.jpg", color: "text-gray" },
      { title: "Step 05", description: "QA & QC", img: "s5.jpg", color: "text-gray" },
      { title: "Step 06", description: "Start Production", img: "start_production.jpg", color: "text-white" },
    ],
    hoverIndex: null,
  }),
  directives: {
    // Custom directive: ซ่อน element จนกว่าจะ scroll เข้ามาใน viewport
    scrollAnimation: {
      inserted(el, binding) {
        // ซ่อน element ด้วย visibility และ opacity
        el.style.visibility = 'hidden';
        el.style.opacity = 0;
        el.style.animationDelay = binding.value || '0s';
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // เมื่อ element เข้ามาใน viewport, เปลี่ยนเป็น visible และเพิ่มคลาสอนิเมชั่น
                el.style.visibility = 'visible';
                el.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(el);
      }
    }
    
    
  }
  
}
</script>

<style scoped>
/* Hero Image */
.img-banner-how-we-work {
  width: 100%;
  object-fit: cover;
}
@media (max-width: 600px) {
  .img-banner-how-we-work {
    height: 250px;
  }
}

/* Timeline Section Background */


/* Title */
.text-title-timeline {
  font-size: 35px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  transition: color 0.3s ease;
}
@media (max-width: 600px) {
  .text-title-timeline {
    font-size: 24px;
  }
}

/* Card */
.card-timeline {
  font-size: 24px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  width: 450px;
  text-align: center;
  padding-bottom: 20px;
  background-color: white;
  color: black;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 15px;
  margin-left: -10px;
  margin-right: -10px;
}
.card-timeline:hover {
  background-color: green;
  color: white;
}
@media (max-width: 600px) {
  .card-timeline {
    max-width: 300px;
    font-size: 18px;
  }
}

/* Image */
.top-img {
  width: 100%;
  transition: transform 0.3s ease;
}
.card-timeline:hover .top-img {
  transform: scale(1.);
}

/* Animation แบบ fadeInUp */
@keyframes enter-animation {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate__fadeInUp {
  animation: enter-animation 1s ease-in-out forwards;
}

/* Colors */
.text-white {
  color: #ffffff;
}
.text-gray {
  color: #333333;
}
.text-green {
  color: #2aa04b;
}
</style>
