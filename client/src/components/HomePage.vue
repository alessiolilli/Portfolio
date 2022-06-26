<template>
  <div class="flex flex-col">
    <div class="flex xl:max-w-7xl">
      <div class="flex flex-col">
        <div class="flex flex-col pl-4">
          <AboutSection v-if="actualLang === 'EN'" :propsData="aboutSection" />
          <AboutSection v-else :propsData="aboutSectionIT" />
        </div>
        <div class="flex flex-col  pl-4 pt-4">
          <SkillsSections :propsData="skillsSection" />
        </div>
        <div class="flex flex-col  pl-4 pt-4">
          <div class="">
            <div class="resume">
              <div class="mb-5">
                <div class="text-3xl titles" id="resume">
                  <span class="border-b-4 borders pb-2">Res</span>ume
                </div>
              </div>
              <div class="grid xl:grid-cols-2 xl:gap-x-5 gap-y-5">
                <div>
                  <div class="text-2xl mb-2">Sumary</div>
                  <div class="resume-item pb-0">
                    <div class="text-xl">Alessio Lilli</div>
                    <div class="mt-3 prova"><em>Web Developer</em></div>
                    <ul class="ml-9 mt-4">
                      <li class="mb-2">
                        Via Carlo Alberto Diano, 35125 Padova PD
                      </li>
                      <li class="mb-2">Cell: +39 324 628 6156</li>
                      <li>Email: lillialessio@libero.it</li>
                    </ul>
                  </div>
                  <div class="text-2xl mb-2">
                    {{ language === "EN" ? "Education" : "Educazione" }}
                  </div>
                  <div>
                    <div class="resume-item">
                      <h4>ITS DIGITAL TRANSFORMATION SPECIALIST</h4>
                      <h5>
                        2020 - {{ language === "EN" ? "present" : "In atto" }}
                      </h5>
                      <p
                        @click="
                          goToLink(
                            'https://itslogistica.it/tecnico-superiore-digital-transformation-specialist'
                          )
                        "
                        class="cursor-pointer prova"
                      >
                        <em>ITS last, Verona VR</em>
                      </p>
                      <p>
                        {{
                          language === "EN"
                            ? "It is a two-year post-diploma specialization course in the field of information technology and new technologies. The topics covered range from website design, web programming (back-end and front-end) and data analysis to IOT and Cyber Security"
                            : "È un corso di specializzazione post-diploma della durata di due anni nel campo dell'informatica e delle nuove tecnologie. Gli argomenti trattati spaziano dalla progettazione di siti web, alla programmazione web (back-end e front-end) e all'analisi dei dati fino all'IOT e alla Cyber Security"
                        }}
                      </p>
                    </div>
                    <div class="resume-item">
                      <h4>
                        {{
                          language === "EN"
                            ? "Administration, finance and marketing"
                            : "Amministrazione, finanza e marketing"
                        }}
                      </h4>
                      <h5>2013 - 2019</h5>
                      <p
                        @click="
                          goToLink(
                            'https://www.einaudigramsci.edu.it/pagine/articolazione-sia'
                          )
                        "
                        class="cursor-pointer prova"
                      >
                        <em>ITSCT Einaudi Gramsci, Padua, PD</em>
                      </p>
                      <p>
                        {{
                          language === "EN"
                            ? "Economic school with technical computer science"
                            : "Suola Economica con indirizzo Informatico"
                        }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <div>
                    <div class="text-2xl mb-2">
                      {{
                        language === "EN" ? "Jobs/Interships" : "Lavori/Stage"
                      }}
                    </div>
                    <div class="resume-item">
                      <div class="text-xl">
                        {{
                          language === "EN"
                            ? "WEB DEVELOPER INTERNSHIP"
                            : "Stage WEB DEVELOPER"
                        }}
                      </div>
                      <h5>04/04/2022 - Actual</h5>
                      <div
                        class="cursor-pointer prova"
                        @click="goToLink('https://kuama.it/')"
                      >
                        <em>Kuama S.r.l., Vigonza, PD</em>
                      </div>
                      <ul class="list-disk ml-9">
                        <li class="mb-2">Redux</li>
                        <li class="mb-2">Vue</li>
                        <li class="mb-2">Next.js</li>
                      </ul>
                    </div>
                    <div class="resume-item">
                      <div class="text-xl">
                        {{
                          language === "EN"
                            ? "WEB DEVELOPER INTERNSHIP"
                            : "Stage WEB DEVELOPER"
                        }}
                      </div>
                      <h5>10/05/2021 - 23/07/2022</h5>
                      <div
                        class="cursor-pointer prova"
                        @click="goToLink('https://www.synclab.it/')"
                      >
                        <em>Sync Lab S.r.l., Padua, PD</em>
                      </div>
                      <ul class="list-disk ml-9">
                        <li class="mb-2">
                          {{
                            language === "EN"
                              ? "Created website with Angular"
                              : "Creato sito con Angular"
                          }}
                        </li>
                        <li class="mb-2">
                          {{
                            language === "EN"
                              ? "Connected with Java Spring Boot"
                              : "Connesso a Java Spring Boot"
                          }}
                        </li>
                        <li>
                          {{
                            language === "EN"
                              ? "Created a Database with MYSQL"
                              : "Creato un Database con MYSQL"
                          }}
                        </li>
                      </ul>
                    </div>
                    <div class="resume-item">
                      <div class="text-xl">
                        {{
                          language === "EN"
                            ? "WEB DEVELOPER INTERNSHIP"
                            : "Stage WEB DEVELOPER"
                        }}
                      </div>
                      <h5>14/06/2017 - 04/07/2017</h5>
                      <div class="prova">
                        <em
                          >{{
                            language === "EN"
                              ? "Municipality of Padua"
                              : "Comune di Padova"
                          }}, Padua, PD</em
                        >
                      </div>
                      <ul class="list-disk ml-9">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>PHP</li>
                        <li>MYSQL</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col xl:flex xl:flex-col xl:pl-4 xl:pt-4"
          id="contact"
        >
          <div
            class="hidden xl:flex titles xl:mb-4 xl:text-3xl "
            id="contact"
          >
            <span class="border-b-4 borders pb-2">Con</span
            >{{ language === "EN" ? "tact" : "tatti" }}
          </div>
          <div class="flex flex-col mb-20">
            <div class="flex flex-col mb-3">
              <div class="flex ml-7">
                <div class="text-xl flex flex-col justify-center mr-3 w-9">
                  <font-awesome-icon icon="fas fa-map-marked-alt" class="p-2" />
                </div>
                <div
                  class="mt-3 xl:flex xl:flex-col cursor-pointer"
                  @click="maps()"
                >
                  <div class="text-2xl">
                    {{ language === "EN" ? "Location" : "Posizione" }}:
                  </div>
                  <div class="prova">
                    Via Carlo Alberto Diano, 35125, Padova PD
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col mb-3">
              <div class="flex ml-7">
                <div class="flex flex-col justify-center mr-3 w-9">
                  <div class="text-xl w-full">
                    <font-awesome-icon
                      icon="fa-solid fa-envelope"
                      class="p-2"
                    />
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="text-2xl">Email:</div>
                  <div class="prova">lillialessio@libero.it</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex ml-7">
                <div class="flex flex-col justify-center mr-3 w-9">
                  <div class="text-xl w-full">
                    <font-awesome-icon icon="fas fa-mobile-alt" class="p-2" />
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="text-2xl">
                    {{ language === "EN" ? "Cell" : "Cellulare" }}:
                  </div>
                  <div class="prova">+39 3246286156</div>
                </div>
              </div>
            </div>
            <div
              class="flex ml-7 mt-4 xl:hidden"
              @click="goToLink('https://www.instagram.com/alessiolilli/')"
            >
              <div class="flex">
                <div class="flex flex-col justify-center mr-3 w-9">
                  <div class="text-xl w-full ml-2">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="flex text-2xl">Instagram</div>
                </div>
              </div>
            </div>
            <div
              class="flex ml-7 mt-4 mb-4 xl:hidden"
              @click="
                goToLink('https://www.linkedin.com/in/alessio-lilli-628160202/')
              "
            >
              <div class="flex">
                <div class="flex flex-col justify-center mr-3 w-9">
                  <div class="text-xl w-full ml-2">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="flex text-2xl">Linkedin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AboutSection from "./AboutSection.vue";
  import SkillsSections from "./SkillsSections.vue";

  export default {
    props: {
      language: String,
    },
    watch: {
      language: function () {
        this.actualLang = this.language;
      },
    },
    data() {
      return {
        actualLang: this.language,
        show: true,
        aboutSection: {
          name: "Web Devloper",
          sections: [
            { section: "Birthday", data: "2 November 1999" },
            {
              section: "Website",
              data: "https://www.alessiolilli.com/",
            },
            { section: "Phone", data: "+39 3246286156" },
            { section: "City", data: "Padua, Italy" },
            { section: "Email", data: "lillialessio@libero.it" },
          ],
        },
        aboutSectionIT: {
          name: "Web Developer",
          sections: [
            { section: "Compleanno", data: "2 Novembre 1999" },
            {
              section: "Sito Web",
              data: "https://alessio-lilli-portfolio.netlify.app/",
            },
            { section: "Cellulare", data: "+39 3246286156" },
            { section: "Citta'", data: "Padova, Italia" },
            { section: "Email", data: "lillialessio@libero.it" },
          ],
        },
        skillsSection: {
          sections: [
            { name: "REACT", percet: "65" },
            { name: "VUE", percet: "65" },
            { name: "ANGULAR", percet: "60" },
            { name: "TAILWIND", percet: "60" },
            { name: "CSS", percet: "65" },
            { name: "LARAVEL", percet: "55" },
            { name: "MYSQL", percet: "65" },
            { name: "PYTHON", percet: "55" },
            { name: "JAVA", percet: "25" },
          ],
        },
      };
    },
    methods: {
      maps() {
        window.open(
          "https://goo.gl/maps/KfJx6FePXHxfdHy77",
          "_blank"
        );
      },
      goToLink(link) {
        window.open(link, "_blank");
      },
    },
    components: { AboutSection, SkillsSections },
  };
</script>
