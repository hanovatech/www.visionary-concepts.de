---

########################### hero slider ############################
hero_slider:
  enable : true
  slider_item:
    - subtitle : "Eventplanung"
      title : "Wir machen aus Ihrer Veranstaltung einen vollen Erfolg"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      bg_image_webp : "images/slider/banner-1.jpg"
      bg_image : "images/slider/banner-1.jpg"
      animation : "fadeInUp" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "more details"
        link : "about/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/
    - subtitle : "Eventlocations"
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

################################## banner feature ############################
banner_feature:
  enable : true
  # Max use 4 item
  feature_item:
    - name : "Eventplanung"
      icon : "fas fa-calendar-check" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Lorem ipsum dolor sit amet constur adipelit sed."
    - name : "Locations"
      icon : "fas fa-search-location" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Lorem ipsum dolor sit amet constur adipelit sed."
    - name : "Catering"
      icon : "fas fa-pizza-slice" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Lorem ipsum dolor sit amet constur adipelit sed."
    - name : "Technik"
      icon : "fas fa-cogs" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Lorem ipsum dolor sit amet constur adipelit sed."


################################## about ####################################
about:
  enable : false
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
    - name : "project done"
      count : "50"
      icon : "fas fa-bullseye" # font-awesome 5 : https://fontawesome.com/icons/
    - name : "Years Experience"
      count : "25"
      icon : "far fa-calendar-alt" # font-awesome 5 : https://fontawesome.com/icons/
    - name : "Awards Win"
      count : "250"
      icon : "fas fa-award" # font-awesome 5 : https://fontawesome.com/icons/
    - name : "Happy Coustomers"
      count : "500"
      icon : "far fa-smile" # font-awesome 5 : https://fontawesome.com/icons/
      
############################## eventlocations ###########################
eventlocations:
  enabled : true
  heading : "Locations für jedes Event"
  subheading: Eventlocations in Hannover
  text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      
############################## eventservices ###########################
eventservices:
  enabled : true
  heading : "Unterstützung für Ihr Event"
  subheading: Event Services
  text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

################################# cta ##################################
cta:
  enable : true
  title : "Unterstützung gefällig?<br>Wir helfen Ihnen gerne weiter!"
  bg_image_webp : "images/backgrounds/cta-lg.webp"
  bg_image : "images/backgrounds/cta-lg.jpg"
  button:
    enable : true
    label : "Jetzt anrufen"
    link : "contact/"
      
############################## mobile-events ###########################
mobileevents:
  enabled : false
  heading : "Mobile Events, immer und überall"
  subheading: Mobile Events
  text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      
############################## eventservices ###########################
entertainment:
  enabled : false
  heading : "Unterhaltung für Ihr Event"
  subheading: Entertainment
  text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

########################### steps ############################
steps:
  enable : true
  steps_items:
    - title : "Die wichtigsten Eckdaten festlegen"
      content : "Stellen Sie uns eine Anfrage mit Ihren Wünschen und allen relevanten Eckdaten zu Ihrer Veranstaltung."
      bullet_point:
        - "Veranstaltungsdatum"
        - "Anzahl Gäste"
        - "Budget"
    - title : "Ihre Wünsche definieren"
      content : "Haben Sie schon eine genaue Vorstellung für Ihre Veranstaltung? Dann teilen Sie uns Ihre Vorstellungen und Wünsche direkt mit!"
      bullet_point:
        - "Atmosphäre und Stil"
        - "Catering und Getränke"
        - "Ausstattung und Technik"
    - title : "Die Veranstaltung gestalten"
      content : "Auf Basis Ihrer Vorstellungen und Wünsche stellen wir Ihnen eine Auswahl potenzieller Eventlocations zusammen und helfen Ihnen bei der Auswahl."
      bullet_point:
        - "Individuell und passend"
        - "Aus unserem Portfolio"
        - "In Hannover und Umgebung"

---