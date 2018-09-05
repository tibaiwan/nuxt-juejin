<template>
  <ul class="entry-list" ref="entry">
    <list-item v-for="(item, index) in recommends" :key="index" :item="item">
      <title-row :title="item.title"></title-row>
      <meta-row :item="item" :show-category="true"></meta-row>
    </list-item>
  </ul>
</template>

<script>
import ListItem from '~/components/home/list-item'
import TitleRow from '~/components/home/title-row'
import MetaRow from '~/components/home/meta-row'

const getData = (store, self) => {
  let params = {
    suid: 'yrFAaIQ3mF3UyUzVa3NQ',
    ab: 'welcome_3',
    src: 'web'
  }
  return new Promise(resolve => {
    store.dispatch('recommend', params).then(res => {
      if (self) {
        const {d, m, s} = res
        if (s === 1) {
          self.recommends.push(...d)
        } else {
          self.$message({
            message: m,
            type: 'warning'
          })
        }
      }
      resolve(res)
    })
  })
}

export default {
  scrollToTop: true,
  components: {
    ListItem,
    TitleRow,
    MetaRow
  },
  data () {
    return {
      scrollStatus: true,
      recommends: []
    }
  },
  async asyncData ({store, error}) {
    let res = await getData(store)
    // console.log('res', res)
    return {
      recommends: res.d
    }
  }
}
</script>

<style lang="stylus" scoped>
.entry-list {
  width 100%
  background #fff
}
</style>
