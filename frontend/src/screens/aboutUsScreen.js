const aboutUs = {
  render: () => {
    return `
        <!-- section headerProd -->
        <section class="header_prod">
          <div class="title">
            <h1 class="heading_primary">#درباره ما</h1>
            <h3>با ما بیشتر آشنا شو</h3>
          </div>
        </section>
        <!-- /section headerProd -->
        <!-- about -->
        <section class="section_about">
          <div class="about-img">
            <img src="./image/seaction1/about.jpg" alt="" />
          </div>
          <div class="about-detail">
            <h1 class="heading_primary">ما کی هستیم؟</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد
            </p>
          </div>
        </section>
        <!--/about-->
        <!-- section feature -->
        <section class="section_feature">
          <!-- link -->
          <ul class="feature">
            <li class="feature_box">
              <div class="icon_box">
                <a href="/#/sining" class="feature_link">
                  <i class="fas fa-user-plus"></i>
                </a>
              </div>
              <div class="feature_description">
                <h4 class="feature_description-header">عضویت</h4>
                <p class="feature_description-text">
                  با عضویت در سایت از تخفیف های ما آگاه شوید
                </p>
              </div>
            </li>
            <li class="feature_box">
              <div class="icon_box">
                <a href="/#/sining" class="feature_link">
                  <i class="fas fa-calendar-alt"></i>
                </a>
              </div>
              <div class="feature_description">
                <h4 class="feature_description-header">زمان ارسال</h4>
                <p class="feature_description-text">
                  ارسال در کمترین زمان ممکن با بهترین قیمت ها
                </p>
              </div>
            </li>
            <li class="feature_box">
              <div class="icon_box">
                <a href="/#/sining" class="feature_link">
                  <i class="fas fa-handshake"></i>
                </a>
              </div>
              <div class="feature_description">
                <h4 class="feature_description-header">همکاری با ما</h4>
                <p class="feature_description-text">لونا آماده همکاری با شما</p>
              </div>
            </li>
            <li class="feature_box">
              <div class="icon_box">
                <a href="/#/sining" class="feature_link">
                  <i class="fas fa-headset"></i>
                </a>
              </div>
              <div class="feature_description">
                <h4 class="feature_description-header">پشتیبانی</h4>
                <p class="feature_description-text">
                  ارسال در کمترین زمان ممکن با بهترین قیمت ها
                </p>
              </div>
            </li>
          </ul>
        </section>
        <!-- /section feature -->
        <!-- conect -->
        <section class="conect-detail">
          <div class="detail">
            <h1 class="heading_primary">
              شما میتوانید از راهای زیر با ما ارتباط برقرار کنید
            </h1>
            <ul class="detailText">
              <li>
                <i class="fa fa-phone-alt icons"></i>
                <a href="tel:09018811709">09018811709</a>
              </li>
              <li>
                <i class="fa-solid fa-envelope icons"></i>
                <a href="mailto:fatemehmadadi258@gmail.com"
                  >fatemehmadadi258@gmail.com</a
                >
              </li>
              <li>
                <i class="fa fa-map-marked icons"></i>
                <span>ایران اردبیل شهرک.....</span>
              </li>
            </ul>
          </div>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.224820230652!2d48.2744602!3d38.22789015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4018964fe4461403%3A0xec41e252dabb1ff5!2z2YXbjNiv2KfZhiDYqNiz24zYrNiMINin2LHYr9io24zZhA!5e0!3m2!1sfa!2s!4v1660993004355!5m2!1sfa!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <!-- /conect -->
        <!-- news -->
        <section class="news">
          <div class="news-text">
            <h1>حساب کاربریت ایجاد کن از ما <span>هدیه</span> بگیر</h1>
          </div>
          <form class="email">
            <a class="normal" id="newsShowmodall">عضویت</a>
            <input
              type="email"
              id="newsEmail"
              placeholder="ایمیل خود را وارد کنید"
            />
          </form>
        </section>
        <!--/news -->
    `;
  },
};
export default aboutUs;
