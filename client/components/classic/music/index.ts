import {
  classicBeh
} from '../classic-beh'

const wxAudio = wx.getBackgroundAudioManager()

Component({
  behaviors:[classicBeh],
  properties: {
    src: String,
    title: String
  },

  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
    tag: 'images/music@tag.png'
  },

  // hidden属性不触发detached, 只有wx:if才会触发detached
  attached () {
    // this._recoverStatus()
    this._monitorSwitch()
  },

  methods: {
    onPlay () {
      // 图片切换
      if (!this.data.playing) {
        this.setData({
          playing: true
        })
        wxAudio.src = this.properties.src
        wxAudio.title = this.properties.title
      } else {
        this.setData({
          playing: false
        })
        wxAudio.pause()
      }
    },
    _recoverStatus () {
      if (wxAudio.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (wxAudio.src === this.properties.src) {
        this.setData({
          playing: true
        })
      }
    },
    _monitorSwitch () {
      wxAudio.onPlay(() => {
        this._recoverStatus()
      })
      wxAudio.onPause(() => {
        this._recoverStatus()
      })
      wxAudio.onStop(() => {
        this._recoverStatus()
      })
      wxAudio.onEnded(() => {
        this._recoverStatus()
      })

    }
  }
})
