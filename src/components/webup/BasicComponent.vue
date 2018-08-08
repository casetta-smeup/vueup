<script>
export default {
  props: ["component"],

  methods: {
    sendDynamism(dynamism) {
      console.log("sending dynamism: ", dynamism);
    }
  }
};
</script>
