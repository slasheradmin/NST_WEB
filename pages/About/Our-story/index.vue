<template>
  <v-container fluid>
    <!-- Hero Image -->
    <v-row>
      <v-col cols="12" class="pa-0">
        <img
          src="~/assets/user_template/6828/slide/1556766344/201906-07-132358_3D-0.jpg"
          alt="Hero Image"
          class="Grew-up-hero-image"
        />
      </v-col>
    </v-row>

    <!-- Timeline Section -->
    <v-row justify="center" class="bg-how-we-work">
      <v-col cols="12" md="10">
        <v-timeline
          :dense="$vuetify.breakpoint.smAndDown"
          :direction="$vuetify.breakpoint.smAndDown ? 'vertical' : 'horizontal'"
          class="timeline-top"
        >
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="hoveredIndex === i ? 'green' : item.color"
            small
            fill-dot
            v-scroll-animation="(i * 0.3) + 's'"
            @mouseover="hoveredIndex = i"
            @mouseleave="hoveredIndex = null"
          >
            <!-- Title -->
            <template v-slot:opposite>
              <span
                class="headline font-weight-bold"
                :class="hoveredIndex === i ? 'text-green' : item.color"
              >
                {{ item.title }}
              </span>
            </template>

            <!-- Timeline Content -->
            <v-row
              class="timeline-row bg-gray"
              dense
              no-gutters
              @mouseover="hoveredIndex = i"
              @mouseleave="hoveredIndex = null"
            >
              <!-- Image Section -->
              <v-col cols="12" md="5" class="image-container">
                <v-img
                  :src="require(`~/assets/uploads/6828/images/about/${item.img}`)"
                  class="top-img"
                />
                <span class="timeline-title">{{ item.header }}</span>
              </v-col>

              <!-- Description Section -->
              <v-col cols="12" md="7" class="description-container">
                <span class="timeline-description">{{ item.description }}</span>
                <v-btn
                  class="btn-read-more"
                  @click="navigateToReadMore(item.title, item.path)"
                >
                  READ MORE
                </v-btn>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      hoveredIndex: null,
      items: [
        {
          title: '1965-1973',
          description:
            'The first 10 years of New Somthai Motor Work Co.,Ltd was rapidly expanded with the strong supports from the influx of Japanese motorcycle manufacturers in Thailand. The company was driven by the founder’s entrepreneurial spirit.',
          color: 'text-gray',
          img: 'p1.jpg',
          header: 'Founded',
          path: 'Founded',
        },
        {
          title: '1974-1980',
          description:
            'Increasing importance of motorcycle in Thai daily life, together with a rebound of Thai economy were essential factors to the business during this period.',
          color: 'text-gray',
          img: 'p2.jpg',
          header: 'Grew up',
          path: 'Grew-up',
        },
        {
          title: '1981-1997',
          description:
            'The accelerated implementation of Thailand government’s policy was benefiting the domestic motorcycle. Unfortunately, ‘Tom Yum Kung’ crisis knocked the economy off the rails, and it has never fully recovered. The company then turned this crisis into a good opportunity to reengineer its internal operation processes to enter the global competition.',
          color: 'text-gray',
          img: 'p3.jpg',
          header: 'Expanded',
          path: 'Expanded',
        },
        {
          title: '1998-2010',
          description:
            'As Thai motorcycle sector is largely dependent on the domestic market and this was subject to instabilities. The company decided to put less emphasis on domestic motorcycle market, but more focus on industry diversification.',
          color: 'text-gray',
          img: 'p4.jpg',
          header: 'Diversified',
          path: 'Diversified',
        },
        {
          title: '2011-2018',
          description:
            'The world automotive and electrical industries are promising, and Thailand has been dubbed the ‘Detroit of Asia’.  Strong global low-cost competitors like China and India become keen rivals for OEMs.',
          color: 'text-white',
          img: 'p5.jpg',
          header: 'Leap forward',
          path: 'Leap-forward',
        },
      ],
    }
  },
  methods: {
    navigateToReadMore(title, path) {
      this.$router.push({
        path: `Our-story/Read-More/${path}`,
        query: { title },
      })
    },
  },
  directives: {
    // Custom directive: ซ่อน element จนกว่าจะ scroll เข้ามาใน viewport
    scrollAnimation: {
      inserted(el, binding) {
        // ซ่อน element ด้วย visibility: hidden
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
                // observer.unobserve เพื่อหยุดการสังเกต
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
.Grew-up-hero-image {
  width: 100%;
  object-fit: cover;
}
@media (max-width: 600px) {
  .Grew-up-hero-image {
    height: 250px;
  }
}

/* Background Image */
.footer-image-how-we-work {
  position: absolute;
  left: 0;
  top: 1280px;
  width: 100%;
  height: auto;
}

/* Text Colors */
.text-green {
  color: #2aa04b;
}
.text-white {
  color: #ffffff;
}
.text-gray {
  color: #333333;
}

/* Timeline */
.timeline-top {
  position: relative;
  top: 20px;
  z-index: 2;
}

/* Image */
.top-img {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.card-timeline:hover .top-img {
  transform: scale(1.05);
}

/* Card */
.bg-gray {
  height: auto;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s;
}
.bg-gray:hover {
  background-color: #2aa04b;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  color: #ffffff;
}
.description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Read More Button */
.btn-read-more {
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 13px;
  margin-top: 16px;
  transition: background-color 0.3s, color 0.3s;
}
.bg-gray:hover .btn-read-more {
  background-color: #ff1744;
  color: #ffffff;
}

/* Title & Description */
.timeline-title {
  font-weight: bold;
  font-size: 20px;
  display: block;
  text-align: center;
  margin-top: 10px;
}
.timeline-description {
  text-align: center;
  font-size: 14px;
  padding: 10px;
  max-width: 100%;
  overflow-wrap: break-word;
  display: inline-block;
}

/* Animation แบบใหม่ */
.animate__fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
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
