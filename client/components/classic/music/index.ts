import {classicBeh} from '../classic-beh'

Component({
  behaviors:[classicBeh],
  properties: {
    img: String,
    content: String
  },

  data: {
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
    tag: 'images/music@tag.png'
  },

  methods: {

  }
})
