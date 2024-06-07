---

########################### hero slider ############################
hero_slider:
  enable : true
  slider_item:
    # slider item
    - subtitle : "Eventplanung"
      title : "Locations für Ihre Veranstaltung"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      bg_image_webp : "images/slider/banner-1.jpg"
      bg_image : "images/slider/banner-1.jpg"
      animation : "fadeInUp" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "more details"
        link : "about/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/
        
    # # slider item
    # - subtitle : "We are here to"
    #   title : "Planning Business"
    #   content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    #   bg_image_webp : "images/slider/banner-2.webp"
    #   bg_image : "images/slider/banner-2.jpg"
    #   animation : "fadeInDown" # animation select from : https://daneden.github.io/animate.css/
    #   button:
    #     enable : true
    #     label : "more details"
    #     link : "about/"
    #     animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/
        
    # # slider item
    # - subtitle : "We are here to"
    #   title : "Planning Business"
    #   content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    #   bg_image_webp : "images/slider/banner-3.webp"
    #   bg_image : "images/slider/banner-3.jpg"
    #   animation : "fadeInLeft" # animation select from : https://daneden.github.io/animate.css/
    #   button:
    #     enable : true
    #     label : "more details"
    #     link : "about/"
    #     animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/
        
    # # slider item
    # - subtitle : "We are here to"
    #   title : "Planning Business"
    #   content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    #   bg_image_webp : "images/slider/banner-4.webp"
    #   bg_image : "images/slider/banner-4.jpg"
    #   animation : "fadeInRight" # animation select from : https://daneden.github.io/animate.css/
    #   button:
    #     enable : true
    #     label : "more details"
    #     link : "about/"
    #     animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/

################################## banner feature ############################
banner_feature:
  enable : true
  # Max use 4 item
  feature_item:
    # banner feature item loop
    - name : "Eventplanung"
      icon : "fas fa-calendar-check" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Lorem ipsum dolor sit amet constur adipelit sed."
      
    # banner feature item loop
    - name : "Locations"
      icon : "fas fa-search-location" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Lorem ipsum dolor sit amet constur adipelit sed."
      
    # banner feature item loop
    - name : "Catering"
      icon : "fas fa-pizza-slice" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Lorem ipsum dolor sit amet constur adipelit sed."
      
    # banner feature item loop
    - name : "Technik"
      icon : "fas fa-cogs" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Lorem ipsum dolor sit amet constur adipelit sed."


################################## about ####################################
about:
  enable : true
  subtitle : "About Us"
  title : "We Are Dynamic Team and Business Agency"
  content : "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt mollit anim est. laborum sed perspiciatis unde omnis natus error sit voluptatem accusantium."
  bg_image : "images/backgrounds/about-us-bg.png"
  bg_image_webp : "images/backgrounds/about-us-bg.webp"
  image_webp : "images/about/about-us.webp"
  image : "images/about/about-us.png"
  button:
    enable : true;
    label : "more service"
    link : "service/"

################################## funfacts ###############################
funfacts :
  enable : true
  funfacts_item :
    # fanfacts item loop
    - name : "project done"
      count : "50"
      icon : "fas fa-bullseye" # font-awesome 5 : https://fontawesome.com/icons/
      
    # fanfacts item loop
    - name : "Years Experience"
      count : "25"
      icon : "far fa-calendar-alt" # font-awesome 5 : https://fontawesome.com/icons/
      
    # fanfacts item loop
    - name : "Awards Win"
      count : "250"
      icon : "fas fa-award" # font-awesome 5 : https://fontawesome.com/icons/
      
    # fanfacts item loop
    - name : "Happy Coustomers"
      count : "500"
      icon : "far fa-smile" # font-awesome 5 : https://fontawesome.com/icons/


################################# feature ############################################
feature:
  enable : true
  subtitle : "Why Choose Us"
  title : "Why They Choose Bexar"
  image_webp : "images/feature/feature.webp"
  image : "images/feature/feature.jpg"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incididunt ut labore."
  feature_item:
    # feature item loop
    - name : "Creative Design"
      icon : "far fa-snowflake" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia."
      
    # feature item loop
    - name : "Pixel Perfect Coding"
      icon : "fas fa-code" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia."

################################# blog ################################################
cta:
  enable : true
  title : "Unterstützung gefällig?<br>Wir helfen Ihnen gerne weiter!"
  bg_image_webp : "images/backgrounds/cta-lg.webp"
  bg_image : "images/backgrounds/cta-lg.jpg"
  button:
    enable : true
    label : "Jetzt anrufen"
    link : "contact/"

################################# blog ################################################
blog:
  enable : true
  section : "blog"
  show_item : 3
  # blog post comes from "content/*/blog" folder

---