import { VantComponent } from '../common/component';
import { GREEN } from '../common/color';

VantComponent({
  props: {
    icon: String,
    steps: Array,
    active: Number,
    direction: {
      type: String,
      value: 'horizontal'
    },
    activeColor: {
      type: String,
      value: GREEN
    }
  },

  watch: {
    steps: 'formatSteps',
    active: 'formatSteps'
  },

  created() {
    this.formatSteps();
  },

  methods: {
    formatSteps() {
      const { steps } = this.data;
      steps.forEach((step, index) => {
        step.status = this.getStatus(index);
      });
      this.set({ steps });
    },

    getStatus(index) {
      const { active } = this.data;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }

      return '';
    }
  }
});
