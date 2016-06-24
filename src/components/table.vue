<template>
      <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
</template>

<script>
import Vue from 'vue'
import VueTables from 'vue-tables'

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      tableData: [
        {
          id: '1',
          name: 'kobe', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        },
        {
          id: '1',
          name: 'Sidney Brakus', pet: randomOption(),
          birth_date: 123
        }
      ],
      columns: ['name', 'pet', 'birth_date']
    }
  },
  methods: {
    deleteMe: function (id) {
      window.alert('Delete ' + id)
    },
    alphabetFilter: function (letter) {
      this.selectedLetter = letter
      this.$broadcast('vue-tables.filter::alphabet', letter)
    }
  }
}

Vue.use(VueTables.client, {
  compileTemplates: true,
  // highlightMatches: true,
  // pagination: {
  // dropdown:true
  // chunk:5
  // },
  filterByColumn: true,
  texts: {
    filter: 'Search:'
  },
  datepickerOptions: {
    showDropdowns: true
  }
  // skin:''
})

function randomOption () {
  return Math.floor(Math.random() * 5)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
