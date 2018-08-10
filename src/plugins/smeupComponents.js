import Vue from "vue";

import Button from "@/components/webup/btn/Button.vue";
import Chart from "@/components/webup/cha/Chart.vue";
import Label from "@/components/webup/lab/Label.vue";
// import ExdLay from "@/components/webup/exd/ExdLay.vue";
import ImageList from "@/components/webup/iml/ImageList.vue";
import InputPanel from "@/components/webup/inp/InputPanel.vue";
import Matrix from "@/components/webup/mat/Matrix.vue";
import Scheda from "@/components/webup/exd/Scheda.vue";
// import Section from "@/components/webup/exd/Section.vue";
import Spotlight from "@/components/webup/spl/Spotlight.vue";
import Unknown from "@/components/webup/unk/Unknown.vue";

Vue.component(Button.name, Button);
Vue.component(Chart.name, Chart);
Vue.component(Scheda.name, Scheda);
Vue.component(ImageList.name, ImageList);
Vue.component(InputPanel.name, InputPanel);
Vue.component(Label.name, Label);
// Vue.component(ExdLay.name, ExdLay);
Vue.component(Matrix.name, Matrix);
// Vue.component(Section.name, Section);
Vue.component(Spotlight.name, Spotlight);
Vue.component(Unknown.name, Unknown);
